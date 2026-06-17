import {
Card,
CardContent,
Chip,
Stack,
Typography,
} from "@mui/material";

export function NotificationCard({ notification }) {
return ( <Card variant="outlined"> <CardContent> <Stack
       direction="row"
       justifyContent="space-between"
       mb={1}
     > <Chip
         label={notification.type}
         size="small"
       />

      <Typography variant="caption">
        {notification.timestamp}
      </Typography>
    </Stack>

    <Typography>
      {notification.message}
    </Typography>
  </CardContent>
</Card>

);
}
