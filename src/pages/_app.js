import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout";
import "../css/tailwind.css";
import "../assets/style.css";


const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
