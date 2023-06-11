import { useQuery } from "@tanstack/react-query"

const useClasses = () => {
    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://assignment-twelve-server-smoky.vercel.app/classes');
            return res.json();
        }
    })
    return [classes, isLoading]
}
export default useClasses;