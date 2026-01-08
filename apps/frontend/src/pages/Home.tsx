import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

// Example API functions
const fetchCount = async (): Promise<number> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Math.floor(Math.random() * 100);
};

const incrementCount = async (currentCount: number): Promise<number> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300));
  return currentCount + 1;
};

export default function Home() {
  const queryClient = useQueryClient();

  // Fetch data with useQuery
  const {
    data: count,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['count'],
    queryFn: fetchCount,
  });

  // Mutate data with useMutation
  const mutation = useMutation({
    mutationFn: incrementCount,
    onSuccess: (newCount) => {
      // Update the cache with the new count
      queryClient.setQueryData(['count'], newCount);
    },
  });

  const handleIncrement = () => {
    if (count !== undefined) {
      mutation.mutate(count);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 w-24" alt="React logo" />
        </a>
        <a
          href="https://tanstack.dev/start/latest"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={'https://tanstack.dev/_build/assets/splash-dark-8nwlc0Nt.png'}
            className="h-24 w-24"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React + TanStack Query</h1>
      <div className="bg-gray-800 ">
        {isLoading ? (
          <p className="text-blue-400 mb-4">Loading count...</p>
        ) : isError ? (
          <p className="text-red-400 mb-4">Error: {error?.message}</p>
        ) : (
          <>
            <button
              onClick={handleIncrement}
              disabled={mutation.isPending}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? 'Updating...' : `count is ${count}`}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
