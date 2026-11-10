# AWS Resume CI/CD Portfolio

A responsive React + Vite resume website prepared for continuous deployment to Amazon S3 using GitHub, AWS CodePipeline, and AWS CodeBuild.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm ci
npm run dev
```

Visit the local URL printed by Vite (usually http://localhost:5173).

## Test and build

```bash
npm test
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Personalize before publishing

Update `src/App.jsx`: name, introduction, skills, project descriptions, email address, and GitHub URL. All values are starter examples, not verified personal information.

## Planned pipeline architecture

```text
GitHub (push to main)
  -> AWS CodePipeline (Source)
  -> AWS CodeBuild (npm ci -> npm test -> npm run build)
  -> CodePipeline S3 Deploy (contents of dist/)
  -> S3 static website hosting
```

`buildspec.yml` instructs CodeBuild to install dependencies, run basic tests, and create deployable assets. CodePipeline's S3 deploy action will extract these assets to the website bucket.

## AWS setup (to complete in Step 2)

1. Create an S3 bucket for static hosting and configure permissions carefully.
2. Create an AWS CodeBuild project with a Node.js 22-compatible environment.
3. Create a CodePipeline GitHub source connection, build stage, and S3 deploy stage.
4. Configure the S3 deploy action to extract the build artifact.
5. Push a change and verify that the pipeline updates the live site.
6. Capture pipeline logs, configuration screenshots, and demo evidence.
7. Delete unused AWS resources after grading requirements are met.

**Security note:** S3 website endpoints support HTTP, not HTTPS. For HTTPS and restricted S3 origin access, use CloudFront with an appropriate private-bucket setup instead.

## Troubleshooting

- `npm ci` fails: check Node version and ensure `package-lock.json` is committed.
- Build fails: run `npm test` and `npm run build` locally first.
- Pipeline doesn't trigger: verify GitHub connection permissions and branch configuration.
- Site shows old content: check the pipeline execution and S3 deploy artifact/extract settings.
- Access denied: review S3 hosting settings, bucket permissions, and deployment role permissions.

## Features checklist

- [x] Responsive React resume website
- [x] Git ignore rules
- [x] Automated basic tests
- [x] Vite production build
- [x] CodeBuild build specification
- [ ] GitHub repository connected to AWS
- [ ] CodePipeline configured
- [ ] S3 hosting configured
- [ ] Automated deployment verified
- [ ] Demo video recorded
- [ ] AWS cleanup completed
