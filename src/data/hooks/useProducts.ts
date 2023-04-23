import { useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";
import { User } from "../@types/user";
import { UseProducts } from "../@types/userproducs";






const useProducts = (id: string | string[] | undefined): UseProducts => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const response = await ApiService.get(`${id}`);
          setUser(response.data);
        } catch (err) {
          setError("Ocorreu um erro ao buscar os dados do usuário.");
        }
        setLoading(false);
      };
  
      if (id) {
        fetchUser();
      }
    }, [id]);
  
    return { user, loading, error };
  };

  export default useProducts;