export default {
  widgets: [
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
                  buildHookId: '5f7f263a7479f500ff85bcf8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bax8vhf2',
                  apiId: '5928d455-3933-455f-a477-57736d8ef4bb'
                },
                {
                  buildHookId: '5f7f263ac6904c0122efc3a2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ne25aheo',
                  apiId: '49d860e9-bc7b-460b-a265-b6b92b27c801'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holly-searchengineunity/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ne25aheo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
