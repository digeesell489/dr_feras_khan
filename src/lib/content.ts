export const nav = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#techniques", label: "Techniques" },
  { href: "#complex", label: "Case Studies" },
  { href: "#education", label: "Education" },
  { href: "#hospital", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { value: "20+ Years", label: "UK Trained" },
  { value: "Chairperson", label: "AO Recon MENA" },
  { value: "FRCS (Orth)", label: "UK Fellowship" },
  { value: "PSI Customised", label: "Surgical Technology" },
];

export const approaches = [
  {
    title: "Conventional Joint Replacement",
    body: "A well-established mechanical alignment approach, using standard implant geometry matched to the patient’s anatomy.",
    link: "When this may be used",
  },
  {
    title: "Robotic-Assisted Surgery",
    body: "Intra-operative 3D mapping, planning and haptic navigation for soft-tissue balancing and precise bone cuts.",
    link: "How robotics is used",
  },
  {
    title: "Patient-Specific Implants",
    body: "Custom 3D-printed from the patient’s CT, designed to match unique joint geometry, ligament tension and kinematic needs.",
    link: "How custom implants work",
  },
];

export const specialties = {
  featured: {
    eyebrow: "Individualised alignment",
    title: "Individualised Joint Line Restoration",
    body: "By matching prosthetic geometry to native joint morphology, the physiological joint line is restored. Ligament isometry is maintained and kinematic function is closer to the native joint than mechanical alignment alone.",
    stats: [
      { value: "4K PLANNING", label: "Pre-operative 3D assessment" },
      { value: "100%", label: "Patient-specific workflow" },
    ],
    link: "Individualised joint replacement",
  },
  cards: [
    {
      image: "/images/implant-hip.png",
      category: "Arthroplasty",
      title: "Primary Hip Replacement",
      body: "Cementless and hybrid reconstruction restoring native offset, length and hip biomechanics.",
    },
    {
      image: "/images/implant-knee.png",
      category: "Arthroplasty",
      title: "Total Knee Replacement",
      body: "Full-surface replacement using mechanical or kinematic alignment matched to the arthritic knee.",
    },
    {
      image: "/images/implant-partial.png",
      category: "Bone conserving",
      title: "Partial Unicompartmental Knee",
      body: "Replacement of a single worn compartment when the rest of the joint remains healthy.",
    },
    {
      image: "/images/implant-robotic.png",
      category: "Technology",
      title: "Robotic-Assisted Surgery",
      body: "Haptic guidance and intra-operative 3D mapping for precise bone cuts and implant position.",
    },
    {
      image: "/images/implant-revision.png",
      category: "Complex reconstruction",
      title: "Revision Hip & Knee Surgery",
      body: "Reconstruction after failed, loose, unstable or infected previous joint replacement.",
    },
    {
      image: "/images/implant-trauma.png",
      category: "Trauma",
      title: "Complex Operative Fractures",
      body: "Peri-articular and periprosthetic fracture fixation using locking plates and reconstructive implants.",
    },
  ],
};

export const caseStudies = [
  {
    image: "/images/knee-mechanics.png",
    tags: ["Procedure", "Implant system"],
    title: "Robotic Total Knee Replacement",
    body: "Patient-specific 3D planning and haptic-guided bone cuts to restore native joint line and ligament balance.",
  },
  {
    image: "/images/implant-revision.png",
    tags: ["Revision", "Implant system"],
    title: "Complex Revision Hip Arthroplasty",
    body: "Reconstruction of a failed hip replacement using a modular revision stem and acetabular augmentation.",
  },
  {
    image: "/images/implant-trauma.png",
    tags: ["Trauma", "Fixation"],
    title: "Periarticular Fracture Reconstruction",
    body: "Anatomical locking-plate reconstruction of a complex periarticular fracture around the joint.",
  },
];

export const educationVideos = [
  {
    id: "robotic",
    image: "/images/education-robotic.png",
    duration: "04:18",
    category: "Surgical workflow",
    title: "Robotic Knee Replacement Explained",
    body: "An in-depth explanation of pre-operative 3D modelling, intra-operative haptic feedback, and how robotic guidance restores the native joint line.",
  },
  {
    id: "psi",
    image: "/images/education-ct.png",
    duration: "03:42",
    category: "Planning",
    title: "Patient-Specific Surgery",
    body: "Custom 3D planning from the patient’s CT scan, used to match implant geometry to unique anatomy.",
  },
  {
    id: "knee-recovery",
    image: "/images/implant-knee.png",
    duration: "05:10",
    category: "Recovery",
    title: "Recovery After Knee Replacement",
    body: "Day-by-day milestones, wound care, walking, and the physiotherapy pathway after knee replacement.",
  },
  {
    id: "hip-recovery",
    image: "/images/implant-hip.png",
    duration: "04:55",
    category: "Recovery",
    title: "Recovery After Hip Replacement",
    body: "Sitting, sleeping positions, precautions, and the expected return to activity after hip replacement.",
  },
];

export const educationGallery = [
  { image: "/images/education-robotic.png", alt: "Robotic surgical workflow" },
  { image: "/images/education-ct.png", alt: "Three-dimensional knee anatomy" },
  { image: "/images/education-or.png", alt: "Operating theatre" },
  { image: "/images/education-lounge.png", alt: "Hospital recovery lounge" },
];

export const clinicHours = [
  { day: "Tuesday", time: "9:00 AM – 1:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 4:00 PM" },
  { day: "Thursday", time: "9:00 AM – 1:00 PM" },
  { day: "Friday", time: "9:00 AM – 1:00 PM" },
  { day: "Saturday – Monday", time: "Closed / Surgery / Theatre lists" },
];

export const faqs = [
  {
    q: "When is joint replacement recommended?",
    a: "When arthritis or joint damage limits walking, sleep, or daily life, and when non-surgical care is no longer enough. The decision is made after examination, imaging, and a clear discussion of benefit and recovery.",
  },
  {
    q: "How is the surgical technique chosen for your joint replacement?",
    a: "The technique follows your anatomy, previous surgery, bone quality, and goals. Options may include patient-specific instrumentation, kinematic alignment, or computer-guided methods. The plan is explained before the day of surgery.",
  },
  {
    q: "What does recovery usually look like?",
    a: "Most patients stand the day after surgery and begin walking with support shortly after. Recovery time varies with the procedure and your starting health. A structured physiotherapy plan is part of every pathway.",
  },
  {
    q: "Do you treat complex or revision cases?",
    a: "Yes. Dr. Ya'ish provides a tertiary service for complex, infected, and revision hip and knee arthroplasty, including cases referred from other centres.",
  },
];
