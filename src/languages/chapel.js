/*
Language: Chapel
Author: Brad Chamberlain <bradcray@gmail.com>
Contributors: 
Description: A parallel language for productive programming at scale
Website: https://chapel-lang.org
*/
export default function(hljs) {
  var CHAPEL_NESTED_COMMENT = hljs.COMMENT(
    '/\\*', '\\*/',
    { contains: [ hljs.C_BLOCK_COMMENT_MODE ] }
  );
  return {
    name: "Chapel",
      keywords: {
          keyword: 'align as atomic begin bool borrowed break by bytes catch class cobegin coforall complex config const continue defer delete dmapped do domain else enum export except extern for forall forwarding if imag import in include index inline inout int iter label lambda let lifetime local locale module new noinit nothing on only otherwise out override owned param private proc prototype public real record reduce ref require return scan select serial shared single sparse string subdomain sync then this throw throws try try! type uint union unmanaged use var void when where while with yield zip',
          built_in: 'here Locales writeln',
          literal: 'false true nil none'
      },
      contains: [ hljs.C_NUMBER_MODE,
                  hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
                  hljs.C_LINE_COMMENT_MODE,
                  {
                      className: 'string',
                      variants: [
                          {
                              begin: '(b)?"', end: '"'
                          },
                          {
                              begin: "(b)?'", end: "'"
                          }
                      ]
                  },
                ]
  }
}

