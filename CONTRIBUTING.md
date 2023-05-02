# Contributing to Quizard (Frontend)

<!-- Add a thank you message for new/existing contributors -->
Welcome to QuizardHq! We appreciate your interest in contributing to our open-source project. Below are some guidelines to help you get started.

To get an overview of the project, look at the [README.md](README.md) file.

This guide will cover the contribution workflow from opening an issue, creating a PR, reviewing, and merging a Pull Request.

Use the table of contents icon <img src="public/assets/table-of-contents.png" width="24" height="24" /> on the top left corner of this document to get to a specific section quickly.

<!-- ## Getting Started
1. Fork the repository to your own GitHub account.
2. Clone the repository to your local machine.
3. Install any necessary dependencies for the project.
4. Create a new branch for your changes. -->

# Ground Rules

Read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand how you can help keep our community approachable and respectable.

### A quick summary

<!-- a quick summary of the Code of Conduct -->
Quizard is committed to creating a respectful, collaborative, and transparent community where individuals from different backgrounds can share their ideas without fear of harassment or discrimination. The Code of Conduct outlines the standards of behavior expected of all contributors and maintainers, including using respectful and inclusive language, accepting constructive criticism, and focusing on what is best for the community.

Unacceptable behavior includes harassment, violence, and spreading misinformation, among other things. Project maintainers are responsible for enforcing these standards and may take corrective action when necessary. The Code of Conduct applies both within project spaces and in public spaces where individuals are representing the project or its community.


## First Time Contributor

<!-- Helpful links and things the contributor should know about contributing to the project: Like our stack (Next.js, TailwindCSS, Git, GitHub etc.), helpful links on setting up and working with each tool in the stack -->

We use the following tools on this codebase:

- [Next.js](https://nextjs.org/) - A React Framework. [This helpful guide](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH) covers the basics
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid prototyping. [Learn how to use it here](https://www.youtube.com/watch?v=pfaSUYaSgRo)
- [Husky](https://typicode.github.io/husky/) - To manage githooks
- [ESLint](https://eslint.org/) - To check for and prevent human errors in the codebase
- [Prettier](https://prettier.io/) - To maintain proper formatting in the codebase
- [Git](https://git-scm.com/) - To store updates to the codebase in commits. Here are a few basic tips to keep in mind
- [GitHub](https://github.com/) - For collaboration. [Here's a crash course](https://www.youtube.com/watch?v=8Dd7KRpKeaE) that covers the basics
- You are free to use any code editor you want; however, we strongly recommend using [Visual Studio Code](https://code.visualstudio.com/) for a good developer experience

<!-- ## Getting Started -->

<!-- Add an introduction here -->

### Finding an Issue

<!-- A concise guide to finding an issue on the repo -->
<!-- Here, you can talk about the different labels on the project and what they mean. I think you should also add that if the contributor finds a new issue, they should comment on it and get approval first -->

Here's a complete list of our frontend's [open issues](https://github.com/quizardhq/frontend/issues).

We use labels to indicate each issue's priority, status, and beginner-friendliness. Look out for some of these labels:

**Issues available for community contribution**

The following tags mark issues that are open for community contribution:

- **good first issue** -> Open to participation from the community and friendly towards new contributors
- **help wanted** -> Open to participation from the community but not necessarily beginner-friendly

Once you've found an issue you would like to work on, check out our [contribution process](#contribution-process) to get started

**Issues not available for community contribution**

The following tags mark issues that are _not_ open for community contribution:

- **🔒 core team only** -> To work on this, you need to join the core team

**Issues not ready to be worked on yet**

The following tags mark issues that are not ready to be worked on yet:

- **🚧 status: blocked** -> Blocked by other work that needs to be done first
- **🧹 status: ticket work required** -> Needs additional work before it is ready to be taken up

### Contribution Process
Contributing to open-source projects can be a great way to build your skills, network with other developers, and give back to the community. However, before making any contributions, it's important to understand the process and guidelines for contributing. Here are some steps to follow when contributing to an open-source project:


1. Search for existing issues: Before creating a new issue, search through the existing ones to avoid duplicating efforts. If you find an existing issue, read through it carefully to ensure you understand the context and requirements.
2. Create a new issue: If you can't find an existing issue that matches your needs, create a new one. When creating a new issue, be sure to provide as much context and detail as possible, including what you're trying to accomplish, steps to reproduce the issue, and any relevant code snippets or screenshots.
3. Wait for triage: After submitting an issue, it will be reviewed by the maintainers of the project. They may ask for more information or provide additional context. Be patient and wait for the status label to change to `waiting for triage.`
4. Ready for development: If the maintainers decide that your issue is worth addressing, they may label it as `ready for development`. This means that it's okay for you to start working on the issue.
5. Comment to request assignment: If you want to work on a `ready for development` issue, comment on the issue to request assignment. Do not tag maintainers in your comment, as they will receive a notification automatically.
6. Wait for assignment: The maintainers will review your comment and assign the issue to you if they agree that you're a good fit. Only start working on the issue once it has been assigned to you.
7. Work on the issue: Once you've been assigned an issue, you can start working on it. Be sure to follow the guidelines for code style, testing, and documentation outlined in the project's documentation. If you're unsure about anything, don't hesitate to ask for help.
8. Submit a pull request: Once you've completed your work, submit a pull request to the project's repository. Be sure to reference the issue in your pull request so that the maintainers can track the progress.
9. Wait for review: The maintainers will review your pull request and provide feedback. Be prepared to make changes and iterate on your work based on their feedback.
10. Merge and close: If the maintainers are satisfied with your work, they will merge your pull request and close the associated issue. Congratulations, you've made a valuable contribution to the project!

> Notes: Any issues that have no activity after 2 weeks will be unassigned and re-assigned to someone else. Only request to be assigned an issue if you know how to work on it
An issue can be assigned to multiple people, if you all agree to collaborate on the issue (the Pull Request can contain commits from different collaborators)
<!-- How to get started with contributing once you find an issue -->

<!-- commenting on an issue and getting it assigned to you -->
<!-- forking and cloning the repo -->
<!-- creating a separate branch for each feature and making changes as required using a mobile-first approach -->
<!-- sending a pull request -->

<!-- **Picking an issue to work on** -->

<!-- Comment on the issue and get it assigned to you first -->

<!-- **Forking and cloning the repo** -->

<!-- Click the fork icon at the top right corner of the project and fork the repo -->
<!-- In your fork, click the code button, and copy the git URL to clone to your local PC. See how to clone here -->

<!-- **Working on your chosen issue in a separate branch** -->

<!-- Create a branch with feat/refactor/bugfix/docs... following these concise branching guidelines -->

<!-- **Sending a pull request** -->

<!-- Send a pull request from your branch to the repo's staging branch -->

<!-- ### Proposing a New Issue -->

<!-- Didn't find an issue? How to raise a new one -->

<!-- If you discover any bugs or possible improvements while going through the project, **check the list of open issues first** to see if someone else has already proposed it.

You can **only** file a bug report or suggest a new feature **if no open issues exist addressing it**.

**How to file a bug report**

**How to suggest a new feature** -->

### Reviewing Pull Requests
We welcome everyone to review Pull Requests, it is a great way to learn and network.

# Support

Do you have any questions about the source code, setting up the project, or contributing? [Join our community on Slack](https://join.slack.com/t/quizardhq/shared_invite/zt-1r9mceq39-jiXnF2o6P7foWawNODsPsQ) so we can have interesting discussions on it.

You can also connect with us on Twitter and LinkedIn.

<!-- Add link to Slack Workspace here, and other means to get in touch with members of the core team, like Twitter and LinkedIn -->

Thanks once again for volunteering to work on this project with us. We look forward to reviewing and merging your contributions.

Have a wonderful day!

Love 💚,

![Quizard Logo](components/assets/logo/logo-full.svg)

Frontend Team
