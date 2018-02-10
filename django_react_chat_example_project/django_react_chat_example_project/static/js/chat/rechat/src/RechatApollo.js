// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as ApolloLinks         from "reason-apollo/src/ApolloLinks.bs.js";
import * as ApolloLink          from "apollo-link";
import * as ReasonApollo        from "reason-apollo/src/ReasonApollo.bs.js";
import * as ApolloInMemoryCache from "reason-apollo/src/ApolloInMemoryCache.bs.js";

function logout() {
  return /* () */0;
}

var httpLink = ApolloLinks.createHttpLink("http://localhost:8000/gql", /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);

function contextHandler() {
  return {
          headers: {
            authorization: "Bearer " + (String("123") + "")
          }
        };
}

var authLink = ApolloLinks.createContextLink(contextHandler);

function errorHandler(errorResponse) {
  var match = errorResponse.networkError;
  if (match) {
    match[0].statusCode === 401;
    return /* () */0;
  } else {
    return /* () */0;
  }
}

var errorLink = ApolloLinks.createErrorLink(errorHandler);

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(/* Some */[(function (obj) {
          if (obj.__typename === "Organization") {
            return obj.key;
          } else {
            return obj.id;
          }
        })], /* None */0, /* () */0);

var apolloClient = ReasonApollo.createApolloClient(inMemoryCache, ApolloLink.from(/* array */[
          authLink,
          errorLink,
          httpLink
        ]), /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);

var Instance = ReasonApollo.CreateClient(/* module */[/* apolloClient */apolloClient]);

export {
  logout         ,
  httpLink       ,
  contextHandler ,
  authLink       ,
  errorHandler   ,
  errorLink      ,
  inMemoryCache  ,
  Instance       ,
  
}
/* httpLink Not a pure module */
