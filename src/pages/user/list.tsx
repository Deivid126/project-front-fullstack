import { useState } from "react";
import {
  TextField,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

import { useRouter } from "next/router";
import useProducts from "@/data/hooks/useProducts";
import { Products } from "@/data/@types/products";
import Image from "next/image";

export default function UserPage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const { user } = useProducts(userId);


  return (
    <div>
      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={userId}
              fullWidth
              label={"Digite o Id do Usuário"}
              placeholder={"Digite o Id do Usuário"}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>
      {user && (
        <Paper>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: 970, mx: "auto", p: { xs: 3, md: 5 } }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width={150}>Nome: {user.name}</TableCell>
                  <TableCell>E-mail: {user.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Título</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Preço</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.last_compras.map((product: Products) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <Image src={product.image} alt={product.title} width={150} height={150} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
}

