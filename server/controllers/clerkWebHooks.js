import User from "../models/user.js";
import { Webhook } from "svix";

const clerkWebHooks = async (req, res) => {
  try {
    // Create a svix instance with the Clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Getting headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // verify the headers
    await whook.verify(JSON.stringify(res.body), headers);

    // Getting data from request body
    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    // Switch case for defferent events
    switch (type) {
      case "User.created": {
        await User.create(userData);
        break;
      }
      case "User.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "User.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }
    res.json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default clerkWebHooks;
