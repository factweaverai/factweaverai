"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import { useTranslation } from "../../context/LanguageContext";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { Send, Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <Typography variant="h2" className="text-5xl font-extrabold mb-4 text-white">
              {t.contact.title}
            </Typography>
            <Typography variant="body1" className="text-xl text-gray-400 mb-10">
              {t.contact.subtitle}
            </Typography>
            <div className="space-y-6">
              <Paper className="p-6 bg-white/5 border-white/10 border rounded-2xl flex items-center gap-4" elevation={0}>
                <div className="p-3 rounded-xl bg-primary/10 text-primary"><LocationOn /></div>
                <div><div className="font-bold text-white">{t.contact.address}</div><div className="text-gray-400">{t.contact.address_val}</div></div>
              </Paper>
              <Paper className="p-6 bg-white/5 border-white/10 border rounded-2xl flex items-center gap-4" elevation={0}>
                <div className="p-3 rounded-xl bg-primary/10 text-primary"><Phone /></div>
                <div><div className="font-bold text-white">{t.contact.phone}</div><div className="text-gray-400">{t.contact.phone_val}</div></div>
              </Paper>
              <Paper className="p-6 bg-white/5 border-white/10 border rounded-2xl flex items-center gap-4" elevation={0}>
                <div className="p-3 rounded-xl bg-primary/10 text-primary"><Email /></div>
                <div><div className="font-bold text-white">{t.contact.email_label}</div><div className="text-gray-400">{t.contact.email_val}</div></div>
              </Paper>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Paper className="p-8 bg-white/5 border-white/10 border rounded-3xl" elevation={0}>
              <Typography variant="h5" className="font-bold mb-6 text-white">{t.contact.send}</Typography>
              <Box component="form" className="space-y-4">
                <TextField fullWidth label={t.contact.name} variant="outlined" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <TextField fullWidth label={t.contact.email} variant="outlined" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <TextField fullWidth label={t.contact.subject} variant="outlined" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                <TextField fullWidth label={t.contact.message} variant="outlined" multiline rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button fullWidth variant="contained" size="large" endIcon={<Send />} sx={{ py: 1.5, fontSize: "1rem" }}>
                    {t.contact.send}
                  </Button>
                </motion.div>
              </Box>
            </Paper>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
