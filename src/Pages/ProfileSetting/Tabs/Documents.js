import React, {useState} from "react";
import DocumentsList from "../../../Components/DocumentsList";
import {Card} from "react-bootstrap";

const documents = [
    {
        id: "1",
        name: "pitchdeck.pdf",
        description: "A boutique investment firm with a global reach Indendent investment solutions for private and institutional clients",
        downloadUrl: "abc.con",
        size: "1.5MB",
        type: 'pdf'
    },
    {
        id: "1",
        name: "Marketing Startegy.doc",
        description: "A boutique investment firm with a global reach Indendent investment solutions for private and institutional clients",
        downloadUrl: "abc.con",
        size: "1.5MB",
        type: 'doc'
    },
    {
        id: "1",
        name: "CaseStudies.xls",
        description: "A boutique investment firm with a global reach Indendent investment solutions for private and institutional clients",
        downloadUrl: "abc.con",
        size: "1.5MB",
        type: 'xls'
    },
]

const Documents = (props) => {
  return(
      <>
          <Card>
              <Card.Body>
                  <DocumentsList data={documents} />
              </Card.Body>
          </Card>
      </>
  )
}

export default Documents;