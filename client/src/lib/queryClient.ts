import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
export const services = [
  { title: "Vector Illustration", icon: "/images/icons8-vector-64.png" },
  { title: "Logo Design", icon: "/images/icons8-logo-64.png" },
  { title: "Brochure Design", icon: "/images/icons8-brochure-64.png" },
  { title: "Flyer Design", icon: "/images/icons8-flyer-64.png" },
  { title: "Poster Design", icon: "/images/icons8-poster-64.png" },
  { title: "Business Card", icon: "/images/icons8-business-card-64.png" },
  { title: "UI/UX Design", icon: "/images/icons8-ui-ux-design-64.png" },
  { title: "Branding And Identity", icon: "/images/icons8-branding-64.png" },
  { title: "T-Shirt Design", icon: "/images/tshirt.png" },
  { title: "Photo Editing", icon: "/images/icons8-photo-editor-64.png" },
  { title: "Infographics", icon: "/images/icons8-infographics-64.png" },
  { title: "Sass", icon: "/images/icons8-sass-64.png" },
  { title: "Social Media Graphic Design", icon: "/images/icons8-social-media-marketing-64.png" },
  { title: "Online Graphics", icon: "/images/icons8-online-shopping-64.png" },
  { title: "Color Theory", icon: "/images/icons8-color-mode-64.png" }
];
