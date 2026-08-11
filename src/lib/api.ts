const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ApiOptions = {
  method?: string;
  body?: BodyInit | null;
  token?: string;
};

export async function api<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: options.method ?? "GET",

    headers: {
      Accept: "application/json",

      ...(options.body
        ? {
            "Content-Type": "application/json",
          }
        : {}),

      ...(options.token
        ? {
            Authorization: `Bearer ${options.token}`,
          }
        : {}),
    },

    body: options.body ?? null,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong"
    );
  }

  return data;
}