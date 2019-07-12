export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d28a742475fdaaa3daf58a9',
                  title: 'Sanity Studio',
                  name: 'client-ux-studio',
                  apiId: '484379d3-1ed7-44ef-82d1-1e9f76eb446d'
                },
                {
                  buildHookId: '5d28a742f5c4c880be550c9a',
                  title: 'Landing pages Website',
                  name: 'client-ux-web',
                  apiId: '15048587-5ab1-4246-b884-e1a70d53fec1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/client-ux/client-ux',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://client-ux-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
