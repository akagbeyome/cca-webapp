# BlueHQ

## Repo design

1. This is intended to be a mono-repo style repo, with some structure such as:
   - webapp - the main content of the Next.js application
   - amplify/{function name}/ - holds lambda functions to be exposed to amplify
   - terraform - terraform artifacts
   - jenkins - any jenkins artifacts
   - .. add other folders as the project evolves


[NextJS WebApp](./webapp/README.md)
   

