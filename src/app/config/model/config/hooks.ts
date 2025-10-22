import { useQuery } from "@tanstack/react-query";
import { get } from "../../api/configs";
import { configStore } from ".";

export function useConfig() {
  const { data } = useQuery({
    queryKey: ["config"],
    queryFn: get,
    refetchInterval: 5000, // 每 5 秒轮询一次
    refetchIntervalInBackground: true, // 后台也轮询
  });

  return {
    serverConfig: data,
    updateWholeConfig: configStore((state) => state.updateWholeConfig),
  };
}
