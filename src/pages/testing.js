import { graphql } from 'gatsby'

//TODO: https://app.contentful.com/spaces/xjaes9fi8agk/home
//TODO: https://graphql.org/learn/introspection/
//TODO: https://blog.logrocket.com/complete-guide-to-graphql-playground/
//TODO: https://www.contentful.com/developers/docs/concepts/data-model/
//TODO: https://stackoverflow.com/questions/52088172/how-do-you-handle-an-array-of-multiple-types-ex-different-content-blocks-in-g
//TODO: https://www.contentful.com/developers/docs/concepts/rich-text/
//TODO: https://www.npmjs.com/package/@contentful/rich-text-react-renderer

const testQuery = graphql`
  query blogPostEntryQuery {
    blogPost(id: "2PtC9h1YqIA6kaUaIsWEQ0") {
      sys {
        id,
        __typename
      },
      contentfulMetadata {
        __typename
      },
      author {
        name
      },
      body {
        json
      }
      # add the fields you want to query
    }
  }
`;


const test2Query = graphql`
  query blogPostEntryQuery {
    blogPostCollection {
      items{
        author {
          name
        },
        body {
          json
        }
      }
      # add the fields you want to query
    }
  }`;

const test3Query = graphql`
  query commonPageEntryQuery {
  commonPage(id: "39tQIXnfBSbNmVv1gyP1x2") {
    pageName,
    mainContentCollection {
      items {
        ...on Image {
          alternateText
        },
        ...on RichTextComponent {
          name,
          text {
            json
          }
        }
      }
    }
  }
}`;