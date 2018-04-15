# okdk-mobile
React Native mobile client for OkeyDokey

<p align="center">
  <img align="center" src="img/logo.png" width="532" height="184" alt="logo.png"/>
</p>

* A React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## Troubleshooting
1. To fix the manifest timeout error / ENOSPC error, run

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Also in your phone, go to Settings -> Apps -> Gear -> Special access -> Draw over other apps -> Toggle on. 

2. To fix the android device insufficient permissions error, run
```
adb kill-server
sudo adb start-server
```

or try 
`adb reverse tcp:8081 tcp:8081`.

## How to Setup

**Step 1:** git clone this repo: `git clone https://github.com/team-okeydokey/okdk-mobile.git`

**Step 2:** cd to the cloned repo: `cd okdk-mobile`

**Step 3:** Install the Application with `yarn` or `npm i`

## How to Run App

1. cd to the repo
2. Run Build for either OS

## Standard Compliant

This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).
