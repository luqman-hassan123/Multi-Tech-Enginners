import { useState } from "react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../../data/blog";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import FilterBar from "../ui/FilterBar";
import BlogCard from "../BlogCard";
import BlogModal from "../BlogModal";

export default function BlogSection() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = BLOG_POSTS.filter(
    (post) => category === "All" || post.category === category
  );

  return (
    <Section id="blog" divider>
      {({ inView }) => (
        <>
          <SectionHeader
            tag="Insights"
            title={
              <>
                News & <span className="text-accent">Updates</span>
              </>
            }
            subtitle="Construction insights, project updates, and industry news from our teams across Pakistan and Afghanistan."
          />

          <FilterBar
            items={BLOG_CATEGORIES.map((c) => ({ id: c, label: c }))}
            value={category}
            onChange={setCategory}
            variant="chip"
          />

          <div className="blog-grid">
            {filtered.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                inView={inView}
                delay={index * 0.06}
                onClick={() => setSelected(post)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state empty-state--dark">No articles in this category yet.</p>
          )}

          {selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}
        </>
      )}
    </Section>
  );
}
