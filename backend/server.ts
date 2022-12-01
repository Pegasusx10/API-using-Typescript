import * as express from 'express';
import { connectDB } from './database/db';
import { PORT } from './utils/config';
const app = express();
connectDB()
app.use(express.json());
app.use('/api/projects', require('./routes/projectRoutes'));
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
