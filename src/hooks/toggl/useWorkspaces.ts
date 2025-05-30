import { getMyWorkspaces } from "@/api";
import { useSafeCachedPromise } from "@/hooks/toggl/useSafeCachedPromise";

export function useWorkspaces() {
  const { data, error, isLoading, revalidate } = useSafeCachedPromise(getMyWorkspaces, [], { initialData: [] });
  return {
    workspaces: data,
    workspacesError: error,
    isLoadingWorkspaces: isLoading,
    revalidateWorkspaces: revalidate,
  };
}
