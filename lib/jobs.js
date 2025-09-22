// lib/jobs.js
import jobs from "@/data/jobs.json";

export function getAllJobs() {
  return jobs;
}

export function getJobsByCategory(category) {
  if (!category) return jobs;
  const c = category.toLowerCase();
  return jobs.filter(j => (j.category || "").toLowerCase() === c);
}

export function getJobBySlug(slug) {
  return jobs.find(j => j.slug === slug);
}
