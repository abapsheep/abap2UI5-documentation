---
outline: [2, 4]
---
# Model

There are three ways to exchange data with the frontend in abap2UI5.

#### One-Way Binding

When you need to display data on the frontend without allowing any changes, use one-way binding. The `client->_bind` method sends the data to the frontend and connects it to the view:
```abap
CLASS z2ui5_cl_app_hello_world DEFINITION PUBLIC.

  PUBLIC SECTION.
    INTERFACES z2ui5_if_app.
    DATA name TYPE string.

ENDCLASS.

CLASS z2ui5_cl_app_hello_world IMPLEMENTATION.
  METHOD z2ui5_if_app~main.

    client->view_display( z2ui5_cl_xml_view=>factory(
      )->page( 'abap2UI5 - Hello World'
          )->text( text = `My Text`
          )->text( client->_bind( name )
      )->stringify( ) ).

  ENDMETHOD.
ENDCLASS.
```
This method also works for tables, trees, and other complex data structures. For more details, refer to the samples repository and explore the table or tree samples.

#### Two-Way Binding
If the user should be able to modify data, enable two-way binding to update data in the ABAP backend. Use the `client->_bind_edit` method so that after an event, the framework will synchronize the data with your ABAP class.

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
        RETURN.
    ENDCASE.

    client->view_display( z2ui5_cl_xml_view=>factory(
      )->page( 'abap2UI5 - Hello World'
          )->text( text = `Enter your name`
          )->input( client->_bind_edit( name )
          )->button( text = 'post' press = client->_event( 'POST' )
      )->stringify( ) ).

  ENDMETHOD.
ENDCLASS.
```

#### Local Binding
When you only have local access to data but want to bind it for display (e.g., for a value help or lookup), use local binding. The `client->_bind_local` method copies the data and sends it to the frontend without impacting backend logic:

```abap
CLASS z2ui5_cl_app_hello_world DEFINITION PUBLIC.

  PUBLIC SECTION.
    INTERFACES z2ui5_if_app.
    
ENDCLASS.

CLASS z2ui5_cl_app_hello_world IMPLEMENTATION.
  METHOD z2ui5_if_app~main.

    DATA(lv_name) TYPE string.

    client->view_display( z2ui5_cl_xml_view=>factory(
      )->page( 'abap2UI5 - Hello World'
          )->text( text = `My Text`
          )->input( client->_bind_local( lv_name )
      )->stringify( ) ).

  ENDMETHOD.
ENDCLASS.
```
For an example of local binding in action, see the value help use case in `Z2UI5_CL_DEMO_APP_002`.

::: tip **Data in Public Attributes**
Be aware that you need to store your data in pubic attributes of your class when using One-Way or Two-Way binding, because the framework needs to access it from outside. This is similar to the PBO/PAI screen days, where data needed to be stored in global variables. 
:::