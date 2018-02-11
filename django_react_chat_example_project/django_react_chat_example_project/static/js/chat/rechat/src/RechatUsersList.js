// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as $$Array             from "bs-platform/lib/es6/array.js";
import * as Curry               from "bs-platform/lib/es6/curry.js";
import * as React               from "react";
import * as Js_json             from "bs-platform/lib/es6/js_json.js";
import * as ReasonReact         from "reason-react/src/ReasonReact.js";
import * as RechatUtils         from "./RechatUtils.js";
import * as RechatApollo        from "./RechatApollo.js";
import * as Caml_exceptions     from "bs-platform/lib/es6/caml_exceptions.js";
import * as RechatUsersListItem from "./RechatUsersListItem.js";

var Graphql_error = Caml_exceptions.create("RechatUsersList.UsersQuery.Graphql_error");

var query = "query   {\nchatUsers  {\nid  \nname  \nusername  \nisCurrentUser  \nphotoUrl  \n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["chatUsers"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeArray(value$1);
      var tmp$1;
      if (match$2) {
        tmp$1 = $$Array.map((function (value) {
                var match = Js_json.decodeNull(value);
                if (match) {
                  return /* None */0;
                } else {
                  var match$1 = Js_json.decodeObject(value);
                  var tmp;
                  if (match$1) {
                    var value$1 = match$1[0];
                    var value$2 = value$1["id"];
                    var match$2 = Js_json.decodeNull(value$2);
                    var tmp$1;
                    if (match$2) {
                      tmp$1 = /* None */0;
                    } else {
                      var match$3 = Js_json.decodeNumber(value$2);
                      var tmp$2;
                      if (match$3) {
                        tmp$2 = match$3[0] | 0;
                      } else {
                        throw Graphql_error;
                      }
                      tmp$1 = /* Some */[tmp$2];
                    }
                    var value$3 = value$1["name"];
                    var match$4 = Js_json.decodeNull(value$3);
                    var tmp$3;
                    if (match$4) {
                      tmp$3 = /* None */0;
                    } else {
                      var match$5 = Js_json.decodeString(value$3);
                      var tmp$4;
                      if (match$5) {
                        tmp$4 = match$5[0];
                      } else {
                        throw Graphql_error;
                      }
                      tmp$3 = /* Some */[tmp$4];
                    }
                    var value$4 = value$1["username"];
                    var match$6 = Js_json.decodeString(value$4);
                    var tmp$5;
                    if (match$6) {
                      tmp$5 = match$6[0];
                    } else {
                      throw Graphql_error;
                    }
                    var value$5 = value$1["isCurrentUser"];
                    var match$7 = Js_json.decodeNull(value$5);
                    var tmp$6;
                    if (match$7) {
                      tmp$6 = /* None */0;
                    } else {
                      var match$8 = Js_json.decodeBoolean(value$5);
                      var tmp$7;
                      if (match$8) {
                        tmp$7 = match$8[0];
                      } else {
                        throw Graphql_error;
                      }
                      tmp$6 = /* Some */[tmp$7];
                    }
                    var value$6 = value$1["photoUrl"];
                    var match$9 = Js_json.decodeNull(value$6);
                    var tmp$8;
                    if (match$9) {
                      tmp$8 = /* None */0;
                    } else {
                      var match$10 = Js_json.decodeString(value$6);
                      var tmp$9;
                      if (match$10) {
                        tmp$9 = match$10[0];
                      } else {
                        throw Graphql_error;
                      }
                      tmp$8 = /* Some */[tmp$9];
                    }
                    tmp = {
                      id: tmp$1,
                      name: tmp$3,
                      username: tmp$5,
                      isCurrentUser: tmp$6,
                      photoUrl: tmp$8
                    };
                  } else {
                    throw Graphql_error;
                  }
                  return /* Some */[tmp];
                }
              }), match$2[0]);
      } else {
        throw Graphql_error;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            chatUsers: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function make() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

var UsersQuery = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* make */make
];

var component = ReasonReact.statelessComponent("RechatUsersList");

function renderUsersListItem(user) {
  return ReasonReact.element(/* Some */[user.username], /* None */0, RechatUsersListItem.make(user, /* array */[]));
}

function renderUsersList(chatUsers) {
  var listItems = $$Array.map(renderUsersListItem, chatUsers);
  return React.createElement("div", {
              className: "users-list"
            }, React.createElement("div", {
                  className: "header"
                }, React.createElement("h2", undefined, RechatUtils.ste("Contacts"))), React.createElement("ul", undefined, listItems));
}

function make$1() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var unexpectedError = React.createElement("div", undefined, "There was an internal error");
      var usersQuery = make(/* () */0);
      return ReasonReact.element(/* None */0, /* None */0, Curry._2(RechatApollo.Instance[/* Query */1][/* make */2], usersQuery, (function (response, parse) {
                        if (typeof response === "number") {
                          return React.createElement("div", undefined, "Loading");
                        } else if (response.tag) {
                          return React.createElement("div", undefined, response[0]);
                        } else {
                          var chatUsers = Curry._1(parse, response[0]).chatUsers;
                          if (chatUsers) {
                            return renderUsersList(RechatUtils.arr_only_some(chatUsers[0]));
                          } else {
                            return unexpectedError;
                          }
                        }
                      })));
    });
  return newrecord;
}

var Query = 0;

export {
  UsersQuery          ,
  component           ,
  Query               ,
  renderUsersListItem ,
  renderUsersList     ,
  make$1                as make,
  
}
/* component Not a pure module */
