<h1>Select</h1>
<p>
  The select component is a wrapper in the
  <a href="https://ember-power-select.com/docs/" target="_blank">power-select</a>
  addon one of the most powerfull select component in the emberjs community.
  We just try to keep some pre set samples for usual cases. Like this one, search for
  some object in a remote API.
</p>
{{#docs-demo as |demo|}}
  {{#demo.example name='docs-select.hbs'}}
    {{ui-select
      onChange=(action "myChangeAction")
      selected=selected
      displayKey="full_name"
      searchRemote=searchRemote
    }}
  {{/demo.example}}
  {{demo.snippet 'docs-select.hbs' label='Template'}}
  {{docs-snippet name='docs-select.js' label='Behavior' language='javascript'}}
{{/docs-demo}}
