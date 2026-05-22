import React, { createContext, useContext, useState, useMemo } from 'react';
import { INITIAL_CUSTOMERS, INITIAL_TASKS, DEMO_CREDENTIALS } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(DEMO_CREDENTIALS.displayName);
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const stats = useMemo(() => {
    const pendingTasks = tasks.filter((t) => t.status !== 'Completed').length;
    const completedTasks = tasks.filter((t) => t.status === 'Completed').length;
    return {
      totalCustomers: customers.length,
      pendingTasks,
      completedTasks,
      recentComms: customers.reduce((sum, c) => sum + (c.communications?.length || 0), 0),
    };
  }, [customers, tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: String(Date.now()),
        status: 'Pending',
      },
    ]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const login = (email, password) => {
    const valid =
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password;
    if (valid) {
      setIsLoggedIn(true);
      setUserName(DEMO_CREDENTIALS.displayName);
    }
    return valid;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    userName,
    customers,
    setCustomers,
    tasks,
    stats,
    addTask,
    updateTask,
    deleteTask,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
