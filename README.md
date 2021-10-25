## Idea

 Creating an API that provides Custom JSON data for the developers to test their application or prototype the application. Developer provides some keywords and parameters according to which the desired data will be passed
 
## **AIM**

Motive behind starting this project is to make open source awareness among students and to create team work skills so that in future they won't face any issue in using collaborative tools like git/github, codespaces, etc.

### How
- Register for hacktober 2021 by visiting [https://hacktoberfest.digitalocean.com/](https://hacktoberfest.digitalocean.com/) and make sure you check the participant checkbox in your profile.
- Then come back here, find opened issues to work on and make sure the issue you are working on is not assigned to anybody else there to avoid duplicate work. If you found no opened issue, you can open a new if you'd like to create new feature, report bug, edit this documentation, etc. These all things will be counted in your hacktober profile after we accept your pull request with "hacktober-accepted" label. Read next points to work on how to contribute.
- First of all fork this repository by fork button in top right of screen:
 ![Screenshot (414)](https://user-images.githubusercontent.com/92014853/136358060-1dfa4cce-b555-4675-ab16-deacfda04228.png)

- Clone this forked repository from YOUR github account to your local machine, change directory into project folder and run start command:
```bash
git clone [your forked repositoy link]
cd server
npm install
npm run server
```
- Create features, modify code, do your stuff.
- After testing all features, create new branch (keep branch name conventional so that it would be easy to review and merge them, for example you are building light theme, then branch name could be "lighttheme"), push your changes to this branch locally and remotely.
- Now to create a pull request, head over to your github account, if you pushed your changes perfectly you will see a "compare and create pull request" button on top of your repository:
![Screenshot (415)](https://user-images.githubusercontent.com/92014853/136358577-2bf66e48-0bb8-472e-bafd-d5012e29c980.png)

 click that and add title and description. Note: Mention issue number in your title that you fixed, for example Fixes #[issue number] or Resolves #[issue number].
 - After that, wait for your PR to be review and merged.
 - 
 ## Further Improvements

- Currently, the server is set to respond to the POST request where you provide keywords and parameters in body of the request. Also you got to set content type : application/json in headers
- A homepage where you can set all the keywords regarding the data so that you get JSON data to copy and paste
- An UI where you can select the keywords to get the data to put in body of the API call.
