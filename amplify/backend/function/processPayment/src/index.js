const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_2YjFNu6VA";
const stripe = require("stripe")(
    "sk_test_51QJGk5RrGjoC3s6udkzD1f0mGUCeKtKnMHFrFTJaSn7gf8dKj7QqO2oY5qBxWitTfg0cVtUxEQe883YXXrN3QwBj00904Nxicj"
);

const getUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username,
    };
    const user = await cognitoIdentityServiceProvider
        .adminGetUser(params)
        .promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
            return attr.Value;
        }
    });
    return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
    try {
        const { id, cart, total, address, token } = event.arguments.input;
        const { username } = event.identity.claims;
        const email = await getUserEmail(event);

        await stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            source: token,
            description: `Order ${new Date()} by ${username} with ${email} email`,
        });
        return { id, cart, total, address, username, email };
    } catch (err) {
        throw new Error(err);
    }
};
