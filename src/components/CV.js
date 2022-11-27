import { Component } from "react";
import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 50,
    fontFamily: "Arial",
    fontWeight: 600,
    margin: "20px 20px",
    fontStyle: "italic",
  },
});

class CV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Document style={{ display: this.props.info.styles ? "block" : "none" }}>
        <Page style={this.page}>
          <div id="pdfContainer">
            <div className="pdf">
              <div id="cvName">
                <Text style={styles.page}>{this.props.info.name}</Text>
              </div>

              <Text id="cvEmail">{this.props.info.email}</Text>
              <Text id="cvNumber">{this.props.info.number}</Text>
            </div>
          </div>
        </Page>
        <div class="editButton">
          <button onClick={this.props.edit}>Edit</button>
        </div>
      </Document>
    );
  }
}

export default CV;
