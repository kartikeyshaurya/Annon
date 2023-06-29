import {
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { Paragraph } from "app/components/Typography";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "700",
  textTransform: "capitalize",
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 100,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" },
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));

const Histroy_Status = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>History OF Previous Document</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 2 }} colSpan={4}>
                File Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Time Processed
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center">
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.time}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available ? (
                    product.available === 0 ? (
                      <Small bgcolor={bgSecondary}>{product.available} available</Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>Done</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>Failed</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">download</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    name: "sampletable1.csv",
    time: "9:15",
    available: 15,
  },
  {
    name: "sampletable2.csv",
    time: 1500,
    available: 0,
  },
  {
    name: "sampletable3.csv",
    time: 1900,
    available: 35,
  },
  {
    name: "sampletable4.csv",
    time: 100,
    available: 0,
  },
  {
    name: "Hsampletable5.csv",
    time: 1190,
    available: 5,
  },
  {
    name: "sampletable6.csv",
    time: 1190,
    available: 5,
  },
  {
    name: "sampletable7.csv",
    time: 1190,
    available: 5,
  },
];

export default Histroy_Status;
