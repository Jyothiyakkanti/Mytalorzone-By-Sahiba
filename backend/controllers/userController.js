let users = []; // Mock database for users

// Register user
exports.register = (req, res) => {
  const { username, password } = req.body;
  const userExists = users.some(u => u.username === username);
  
  if (userExists) return res.status(400).send('User already exists');
  
  const newUser = { username, password };
  users.push(newUser);
  res.status(201).send('User registered');
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) return res.status(400).send('Invalid credentials');
  
  res.status(200).send('Login successful');
};
