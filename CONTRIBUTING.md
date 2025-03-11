# Contributing to Keploy

Thank you for your interest in Keploy and for taking the time to contribute to this project. 🙌 Keploy is a project by developers for developers and there are a lot of ways you can contribute.

If you don't know where to start contributing, ask us on our [Slack channel](https://keploy.slack.com/join/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw).

## Code of conduct

Contributors are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Prerequisites for the contributors

Contributors should have knowledge of git, go, and markdown for most projects since the project work heavily depends on them.
We encourage Contributors to set up Keploy for local development and play around with the code and tests to get more comfortable with the project. 

Sections

- <a name="contributing"> General Contribution Flow</a>
  - <a name="#commit-signing">Developer Certificate of Origin</a>
- <a name="contributing-keploy">Keploy Contribution Flow</a>
  - <a name="keploy-server">Keploy Server</a>
  - <a name="keploy-docs">Keploy Documentation</a>
  - <a name="keploy-sdks">Keploy SDK Integration</a>

# <a name="contributing">General Contribution Flow</a>

## Installation

If you wish to contribute, we highly recommend following the guidelines mentioned below.

**1.**  Fork [this](https://github.com/keploy/website) repository.

**2.**  Clone your forked copy of the project.

```bash
   git clone https://github.com/<GITHUB_USERNAME>/website.git
```

**3.** Open your preferred IDE (Integrated Development Environment) such as Visual Studio Code.

**4.** Navigate to the project directory. Open the folder 'website' in your IDE.

**5.** Make changes in source code.

**6.** Save the file and open it in your web browser by simply double-clicking on the file.

**7.** Alternatively, you can also open the file from within the IDE using the "Open in Default Browser" feature or a browser extension like "Live Server" for VSCode.


**8.** Stage your changes and commit.

```
   git add .
   git commit -s -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repo.

```
   git push
```

**10.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)


## <a name="commit-signing">Signing-off on Commits (Developer Certificate of Origin)</a>

To contribute to this project, you must agree to the Developer Certificate of
Origin (DCO) for each commit you make. The DCO is a simple statement that you,
as a contributor, have the legal right to make the contribution.

See the [DCO](https://developercertificate.org) file for the full text of what you must agree to
and how it works [here](https://github.com/probot/dco#how-it-works).
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

```
Signed-off-by: Jane Smith <jane.smith@example.com>
```

In most cases, you can add this signoff to your commit automatically with the
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:

```
$ commit -s -m “my commit message w/signoff”
```

To ensure all your commits are signed, you may choose to add this alias to your global `.gitconfig`:

_~/.gitconfig_

```
[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
```

## <a name="contributing-keploy">Keploy Website Contribution Flow</a>

Keploy Website is written in `Html`, `Css` and `JS` (Javascript).

There are many ways in which you can contribute to Keploy Website.

###  <a name="keploy-server">Keploy Website</a>

#### Report an Issue
Report all issues through GitHub Issues using the [Issues]https://github.com/keploy/website/issues/new) template.
To help resolve your issue as quickly as possible, give a proper title and provide all the informations.


# Contact

Feel free to join [slack](https://keploy.slack.com/join/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw) to start a conversation with us.