/*
retrieve a single user
parse the json
retrieve that user's repositories based on parsed json
only output everything when we've retrieved both user and  repositories
*/
function get(url) {
  return new Promise((fulfill, reject) => {
    const req = new XMLHttpRequest();  
    req.open('GET', url);
    req.addEventListener('load', function() {
      if(req.status >= 200 && req.status < 400) {
        // we've succeeded in retrieving url!
        // so call fulfill
        fulfill(req.responseText);  
      } else {
        reject('bad status code'); 
      } 
    });
    req.addEventListener('error', function(err) {
      reject(err);
    });
    req.send();
  });
}

function extractRepoURL(data) {
  const userInfo = JSON.parse(data);
  console.log(userInfo['repos_url']);
  return userInfo['repos_url'];
  // return new Promise and fulfill(userInfo['repos_url']
  // TODO: look up immediately fulfilled
}

get('https://api.github.com/users/foureyes')
  .then(extractRepoURL, console.log.bind(null, 'ERROR'))
  .then(get)
  .then(console.log);
  .catch()

.all([p1, p2, p3])




























