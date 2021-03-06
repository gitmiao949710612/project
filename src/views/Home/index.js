import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import SimpleMDE from'simplemde';

class Home extends React.Component {


  componentWillMount () { }
  componentDidMount (){
    var simplemde = new SimpleMDE({
      autofocus: true,
      autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000,
      },
      blockStyles: {
        bold: "__",
        italic: "_"
      },
      
      element: document.getElementById("MyID"),
      forceSync: true,
      hideIcons: ["guide", "heading"],
      indentWithTabs: false,
      initialValue: "Hello world!",
      insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
      },
      lineWrapping: false,
      parsingConfig: {
        allowAtxHeaderWithoutSpace: true,
        strikethrough: false,
        underscoresBreakWords: true,
      },
      placeholder: "Type here...",
      previewRender: function(plainText) {
        return customMarkdownParser(plainText); // Returns HTML from a custom parser
      },
      previewRender: function(plainText, preview) { // Async method
        setTimeout(function(){
          preview.innerHTML = customMarkdownParser(plainText);
        }, 250);
    
        return "Loading...";
      },
      promptURLs: true,
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      },
      shortcuts: {
        drawTable: "Cmd-Alt-T"
      },
      showIcons: ["code", "table"],
      spellChecker: false,
      status: false,
      status: ["autosave", "lines", "words", "cursor"], // Optional usage
      status: ["autosave", "lines", "words", "cursor", {
        className: "keystrokes",
        defaultValue: function(el) {
          this.keystrokes = 0;
          el.innerHTML = "0 Keystrokes";
        },
        onUpdate: function(el) {
          el.innerHTML = ++this.keystrokes + " Keystrokes";
        }
      }], // Another optional usage, with a custom status bar item that counts keystrokes
      styleSelectedText: true,
      tabSize: 4,
      toolbar: [{
        name: "bold",
        action: SimpleMDE.toggleBold,
        className: "fa fa-bold",
        title: "Bold",
      },
      {
        name:"code",
        action: SimpleMDE.toggleCodeBlock,
        className:"fa fa-code",
        title:"Code"
      },
      {
        name: "custom",
        action: function customFunction(editor){
          // Add your own code
        },
        className: "fa fa-star",
        title: "Custom Button",
      },
      "|", // Separator
     
    ],
      // toolbar: ["bold", "italic", "heading", "|", "quote"],
      // toolbar: true,
      toolbarTips: true,
    });
  }
  render() {
    
    return (
      <div>
        <Divider >this is Home</Divider>
      {/* <div id='MyID'></div> */}
      <textarea id='MyID' style={{width:500,height:500}}/>
      </div>
    );
  }
}
export default Home;
