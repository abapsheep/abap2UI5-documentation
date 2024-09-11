# Quickstart

### 1. Installation with abapGit

Install with [abapGit](https://abapgit.org) ![abapGit](https://docs.abapgit.org/img/favicon.png).

### 2. Set up a new HTTP service
Implement the following handler:
##### Standard ABAP  🏠
```abap
METHOD if_http_extension~handle_request.

   server->response->set_cdata( z2ui5_cl_http_handler=>main( server->request->get_cdata( ) ) ).
   server->response->set_header_field( name = `cache-control` value = `no-cache` ).
   server->response->set_status( code = 200 reason = `success` ).

ENDMETHOD.
```
##### ABAP for Cloud  :cloud:
<details>
<summary>show code...</summary>
   
```abap
METHOD if_http_service_extension~handle_request.

   response->set_text( z2ui5_cl_http_handler=>main( request->get_text( ) ) ).
   response->set_header_field( i_name = `cache-control` i_value = `no-cache` ).
   response->set_status( 200 ).

ENDMETHOD.
```

</details>

### 3. Create your first App
Implement the abap2UI5 interface as shown in the following example:
```abap
CLASS z2ui5_cl_app_hello_world DEFINITION PUBLIC.

  PUBLIC SECTION.
    INTERFACES z2ui5_if_app.
    DATA name TYPE string.

ENDCLASS.

CLASS z2ui5_cl_app_hello_world IMPLEMENTATION.

  METHOD z2ui5_if_app~main.

    CASE client->get( )-event.
      WHEN 'POST'.
        client->message_box_display( |Your name is { name }.| ).
    ENDCASE.

    client->view_display( z2ui5_cl_xml_view=>factory(
      )->page( 'abap2UI5 - Hello World'
         )->simple_form( )->content( ns = `form`
            )->title( 'Input here and send it to the server...'
            )->label( 'Name'
            )->input( client->_bind_edit( name )
            )->button( text = 'post' press = client->_event( 'POST' )
      )->stringify( ) ).

  ENDMETHOD.
ENDCLASS.
```