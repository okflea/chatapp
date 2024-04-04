const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Commands = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(
  command: Commands,
  ...args: (string | number)[]
) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join("/")}`;

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${upstashRedisRestToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`error executing redis command: ${response.statusText}`);
  }
  const data = await response.json();

  if (data.error) {
    throw new Error(`error parsing response: ${data.error}`);
  }
  return data.result;
}
