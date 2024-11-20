import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { generateClient } from "aws-amplify/api";
import "@aws-amplify/ui-react/styles.css";
import { getUrl, uploadData } from "aws-amplify/storage";
import { Authenticator } from "@aws-amplify/ui-react";
import { createProduct } from "../api/mutations";
import config from "../aws-exports";
import { toast } from "react-toastify";

const client = generateClient();

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket,
} = config;

const defaultProductDetails = {
    name: "",
    description: "",
    image: "",
    extension: "",
    seller: "",
    price: "",
    featured: false,
};

const Admin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [productDetails, setProductDetails] = useState(defaultProductDetails);
    const [image, setImage] = useState(null);

    const uploadToAWS = async () => {
        const format = (value) => value.replace(/\s/g, "_").toLowerCase();

        const keySeparator = "_-_";

        const name =
            format(productDetails.seller) +
            keySeparator +
            format(productDetails.name);
        const extension = productDetails.extension;

        const key = `images/${uuidv4()}${keySeparator}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

        try {
            // Upload the file to s3 with public access level.
            await uploadData({
                key: key,
                data: productDetails.image,
                options: {
                    accessLevel: "public",
                    contentType: productDetails.extension,
                },
            });

            // Retrieve the uploaded file to display
            // const image = await getUrl({
            //     key: key,
            //     options: {
            //         accessLevel: 'public',
            //     },
            // });

            return url;
        } catch (err) {
            console.log(err);
            throw new Error("Error uploading file");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // 1) Image is uploaded to S3
            const imageURL = await uploadToAWS();

            // 2) Product is created in the database
            await client.graphql({
                query: createProduct,
                variables: {
                    input: {
                        name: productDetails.name,
                        description: productDetails.description,
                        image: imageURL,
                        seller: productDetails.seller,
                        price: productDetails.price,
                        featured: productDetails.featured,
                    },
                },
            });

            setProductDetails(defaultProductDetails);

            toast.success("Product created successfully");

            // Clear all inputs
            document.querySelectorAll("input").forEach((input) => {
                input.value = "";
            });
            document.querySelectorAll("textarea").forEach((input) => {
                input.value = "";
            });
            setImage(null);
        } catch (err) {
            toast.error("Error creating product");
            console.log("error creating todo:", err);
        }
        setIsLoading(false);
    };

    const handleImageUpload = async (e) => {
        e.preventDefault();

        // Upon cancel
        if (!e.target.files.length) {
            return;
        }

        // Locally display the image
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];

        // Only accept images
        if (!file.type.includes("image")) {
            e.target.value = null;
            alert("Please upload an image file");
            return;
        }

        setImage(URL.createObjectURL(file));
        setProductDetails({
            ...productDetails,
            image: file,
            extension: extension,
        });
    };

    return (
        <section
            className="admin-wrapper"
            style={{
                paddingBottom: "50px",
            }}
        >
            <Authenticator hideSignUp>
                {({ signOut, user }) => (
                    <section>
                        <header className="form-header">
                            <h3>Add New Product</h3>
                            <button
                                className="btn"
                                onClick={signOut}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                Sign out
                            </button>
                        </header>

                        <form
                            className="form-wrapper"
                            style={{
                                gap: "1rem",
                                padding: "5rem",
                            }}
                            onSubmit={handleSubmit}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <input
                                    type="file"
                                    onChange={(e) => handleImageUpload(e)}
                                    style={{
                                        width: "80%",
                                        padding: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                    required
                                />
                                {productDetails.image && (
                                    <img
                                        className="image-preview mx-auto"
                                        src={image}
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="form-fields">
                                <div className="title-form">
                                    <p>
                                        <label
                                            htmlFor="name"
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Product Name
                                        </label>
                                    </p>
                                    <p>
                                        <input
                                            name="name"
                                            type="title"
                                            placeholder="Type the Product Name"
                                            onChange={(e) =>
                                                setProductDetails({
                                                    ...productDetails,
                                                    name: e.target.value,
                                                })
                                            }
                                            style={{
                                                padding: "0 1rem",
                                            }}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="description-form">
                                    <p>
                                        <label
                                            htmlFor="description"
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Description
                                        </label>
                                    </p>
                                    <p>
                                        <textarea
                                            name="description"
                                            type="text"
                                            rows="8"
                                            placeholder="Type the description of the product"
                                            onChange={(e) =>
                                                setProductDetails({
                                                    ...productDetails,
                                                    description: e.target.value,
                                                })
                                            }
                                            style={{
                                                resize: "none",
                                                padding: "0 1rem",
                                            }}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="author-form">
                                    <p>
                                        <label
                                            htmlFor="seller"
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Seller
                                        </label>
                                    </p>
                                    <p>
                                        <input
                                            name="seller"
                                            type="text"
                                            placeholder="Type the seller's name"
                                            onChange={(e) =>
                                                setProductDetails({
                                                    ...productDetails,
                                                    seller: e.target.value,
                                                })
                                            }
                                            style={{
                                                padding: "0 1rem",
                                            }}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="price-form">
                                    <p>
                                        <label
                                            htmlFor="price"
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Price ($)
                                        </label>
                                        <input
                                            name="price"
                                            type="number"
                                            min="0"
                                            placeholder="What is the Price of the product (SGD)"
                                            onChange={(e) =>
                                                setProductDetails({
                                                    ...productDetails,
                                                    price: e.target.value,
                                                })
                                            }
                                            style={{
                                                padding: "0 1rem",
                                            }}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="featured-form">
                                    <p>
                                        <label
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Featured? &nbsp;
                                        </label>
                                        <input
                                            type="checkbox"
                                            className="featured-checkbox"
                                            checked={productDetails.featured}
                                            onChange={() =>
                                                setProductDetails({
                                                    ...productDetails,
                                                    featured:
                                                        !productDetails.featured,
                                                })
                                            }
                                        />
                                    </p>
                                </div>
                                <div className="submit-form">
                                    <button
                                        className="btn"
                                        type="submit"
                                        style={{
                                            cursor: isLoading
                                                ? "not-allowed"
                                                : "pointer",
                                        }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Loading..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                )}
            </Authenticator>
        </section>
    );
};

export default Admin;
