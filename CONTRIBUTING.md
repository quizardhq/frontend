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

## Getting Started

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
Before creating an Issue for `features`, `bugs` or `improvements`, please follow these steps:

1. Search existing issues before creating a new issue (has someone raised this already)
2. If it doesn't exist, create a new issue giving as much context as possible (please select the correct Issue type, for example bug or feature)
3. All Issues are automatically given the label `status: waiting for triage`. Please wait until the maintainers review the Issue and update the labels.
4. Look out for when the Issue label changes to `status: ready for dev`.
5. Comment on the Issue asking for it to be assigned to you (do not tag maintainers as all maintainers receive your comment notifications).
6. Only start working on this issue (and open a Pull Request) when it has been assigned to you - this will prevent confusion, multiple people working on the same issue and work not being used.

#### Working on an Issue (get it assigned to you)
Before working on an existing Issue please follow these steps:

1. Pease do not ask to be assigned an issue that has the label status: awaiting triage - this creates more notifications for maintainers and it will not be assigned.
2. Look out for the Issue label status: `ready for dev` (if it does not have this label, your work might not be accepted)
3. Comment asking for the issue to be assigned to you (do not tag any maintainers as all maintainers receive your comment notifications)
4. After the issue is assigned to you, you can start working on it
5. Do not enable GitHub Actions on your fork
6. Reference the Issue in your Pull Request (for example `closes #123`)

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
