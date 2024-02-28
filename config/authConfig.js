const SecretsClient = require('../utils/GCPSecrets');

const authConfig = async () => {
    try {
        // Get GCP Secrets
        const secretsClient = await new SecretsClient();
        const issuerBaseURL = await secretsClient.getSecret(process.env.ISSUER_BASE_URL);
        const audience = await secretsClient.getSecret(process.env.AUDIENCE);
        const tokenSigningAlg = await secretsClient.getSecret(process.env.TOKEN_SIGNING_ALG);
        
        const config = {
            audience: audience,
            issuerBaseURL: issuerBaseURL,
            tokenSigningAlg: tokenSigningAlg
          };

        return config;
    }catch(e){
        console.error(`Error connecting to Secret Manager: ${e}`);
    }

}

module.exports = authConfig;