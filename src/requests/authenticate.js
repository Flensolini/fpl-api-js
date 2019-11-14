const authenticate = async () => {
    let formData = new FormData();
    formData.append('login', 'k.myhre@live.no');
    formData.append('password', 'xedfo6-bysvet-wobKyp');
    formData.append('redirect_uri', 'https://fantasy.premierleague.com/a/login');
    formData.append('app', 'plfpl-web');

    const response = await fetch('https://cors-anywhere.herokuapp.com/https://users.premierleague.com/accounts/login/',{
      method: 'POST',
      body: formData,
    });
    //const myJson = await response.json();
    console.log(response.headers.get('set-cookie'))
    //return myJson
}

export default authenticate;