import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();

    return new Response(JSON.stringify({ message: "Hello World" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
