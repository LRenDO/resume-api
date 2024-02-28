const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

class GCPSecrets {
    constructor(){
        this.client = new SecretManagerServiceClient();
        this.GCP_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;
    }

    // getSecret
    // Parameters: 
    //      name - secret name
    //      version - secret version
    // Returns: secret value
    async getSecret(name, version='latest'){
        const secretClient = new GCPSecrets();
        const [result] = await this.client.accessSecretVersion({
            name: `projects/${this.GCP_PROJECT}/secrets/${name}/versions/${version}`
        });
        const payload = result.payload.data.toString('utf8');
        return payload;
    }

}

module.exports = GCPSecrets;