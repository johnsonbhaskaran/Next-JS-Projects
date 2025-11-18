export const GET = async (request) => {
  try {
    return new Response("Hello World", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
