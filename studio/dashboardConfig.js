export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e579c40773cd7c7635381b8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog11-studio',
                  apiId: '6fe069d4-a9cf-4a52-8b9a-fb9240944f25'
                },
                {
                  buildHookId: '5e579c40c9bac19c7f201164',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog11',
                  apiId: '8ede235e-6ed4-42b4-8c6c-8f3779a65289'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-eleventy-blog11',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog11.netlify.com', category: 'apps'}
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
