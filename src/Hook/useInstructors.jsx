import { useQuery } from "@tanstack/react-query"

const useInstructors = () => {
    const { data: instructors = [], isLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })
    return [instructors, isLoading]
}
export default useInstructors;