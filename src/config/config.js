const config={
    APi_Key:String(import.meta.env.VITE_TMDB_BEARER_TOKEN),
    Access_Token:String(import.meta.env.VITE_TMDB_BEARER_TOKEN)
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.Access_Token}` 
  }
};

export { config, options };
