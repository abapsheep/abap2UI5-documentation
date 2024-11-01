---
outline: [2, 4]
---
# View
Output in abap2UI5 is generated by importing a UI5 XML View. Here’s a basic example:

```abap
METHOD z2ui5_if_app~main.

    client->view_display( 
        |<mvc:View xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" | &
        |   displayBlock="true" height="100%">| &
        |  <Shell>| &
        |    <Page title="My title">| &
        |          <Text text="My text"/>| &
        |    </Page>| &
        |  </Shell>| &
        |</mvc:View>| ).

ENDMETHOD.
```
You can use any UI5 control available in the UI5 SDK. However, working with XML can be cumbersome. The current best practice is to use the class `Z2UI5_CL_XML_VIEW`:
```abap
  METHOD z2ui5_if_app~main.

    client->view_display(
        z2ui5_cl_xml_view=>factory(
            )->shell(
                )->page( 'My title'
                    )->Text( 'My text' 
        )->stringify( ) ).

  ENDMETHOD.
```
Check the API of the class `Z2UI5_CL_XML_VIEW` and use code completion to easily find the right controls and properties. Additionally, it’s recommended to explore the sample repository, where pre-written XML examples for most use cases are available for easy copy, paste, and adjustment to fit your needs. 

Currently, this setup is quite static; we’ll explore how to bind and exchange data in the next section.