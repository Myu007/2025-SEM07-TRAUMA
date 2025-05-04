const questions = [
  {
    question: "What is the first stage of bone fracture healing?",
    answers: [
      { text: "Hematoma formation", correct: true },
      { text: "Callus formation", correct: false },
      { text: "Remodeling", correct: false },
      { text: "Inflammation", correct: false },
      { text: "Bone resorption", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the consolidation phase in fracture healing?",
    answers: [
      { text: "Cartilage is replaced by bone", correct: true },
      { text: "The bone regains its original shape and strength", correct: false },
      { text: "The bone marrow cavity is re-established", correct: false },
      { text: "Blood vessels form within the callus", correct: false },
      { text: "A soft callus forms around the fracture site", correct: false },
    ],
  },
  {
    question: "Which of the following best describes a comminuted fracture?",
    answers: [
      { text: "A fracture where the bone is broken into three or more pieces", correct: true },
      { text: "A fracture that results from a twisting force.", correct: false },
      { text: "A fracture where one fragment is driven into another.", correct: false },
      { text: "A fracture that occurs in children, where one side of the bone bends and the other breaks", correct: false },
      { text: "A fracture that involves the growth plate in children.", correct: false },
    ],
  },
  {
    question: "A patient presents with a non-union of a tibial fracture 6 months post-injury. Which of the following interventions is most appropriate at this stage?",
    answers: [
      { text: "Bone grafting", correct: true },
      { text: "External fixation", correct: false },
      { text: "Antibiotic therapy", correct: false },
      { text: "Continued immobilization", correct: false },
      { text: "Traction", correct: false },
    ],
  },
  {
    question: "A 40-year-old man presents with severe pain and deformity in his lower leg after a car accident. X-ray reveals a comminuted fracture of the tibia. Considering the type of fracture, what is the most appropriate initial management?",
    answers: [
      { text: "Immediate surgical intervention and internal fixation.", correct: true },
      { text: "Application of a simple cast and discharge.", correct: false },
      { text: "Closed reduction and application of a brace.", correct: false },
      { text: "Immobilization with a splint and pain management.", correct: false },
      { text: "Administration of NSAIDs and rest.", correct: false },
    ],
  },
  {
    question: "What is the most absolute (100%) physical sign of a bone fracture?",
    answers: [
      { text: "Crepitus", correct: true },
      { text: "Pain", correct: false },
      { text: "Swelling", correct: false },
      { text: "Deformity", correct: false },
      { text: "Bruising", correct: false },
    ],
  },
  {
    question: "Which of the following is the best initial physical examination technique to assess for a possible fracture?",
    answers: [
      { text: "Palpation for tenderness", correct: true },
      { text: "Inspection for deformity", correct: false },
      { text: "Neurological examination", correct: false },
      { text: "Range of motion testing", correct: false },
      { text: "Vascular examination", correct: false },
    ],
  },
  {
    question: "Which of the following signs is most indicative of a bone fracture during a physical examination?",
    answers: [
      { text: "Localized swelling, pain, and deformity at the injury site", correct: true },
      { text: "Generalized muscle weakness", correct: false },
      { text: "Absence of a palpable pulse distal to the injury site", correct: false },
      { text: "Diffuse joint pain and stiffness", correct: false },
      { text: "Presence of a rash near the injury site", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman falls and sustains a wrist injury. On examination, there is swelling and tenderness over the distal radius, and a 'dinner fork' deformity is noted. The most likely diagnosis is:",
    answers: [
      { text: "Colles' fracture", correct: true },
      { text: "Smith's fracture", correct: false },
      { text: "Scaphoid fracture", correct: false },
      { text: "Galeazzi fracture", correct: false },
      { text: "Monteggia fracture", correct: false },
    ],
  },
  {
    question: "What is the most common imaging modality used to diagnose bone fractures?",
    answers: [
      { text: "X-ray", correct: true },
      { text: "MRI", correct: false },
      { text: "CT scan", correct: false },
      { text: "Ultrasound", correct: false },
      { text: "Bone scan", correct: false },
    ],
  },
  {
    question: "Which imaging modality is most useful for detecting stress fractures that are not visible on standard X-rays?",
    answers: [
      { text: "MRI", correct: true },
      { text: "CT scan", correct: false },
      { text: "Ultrasound", correct: false },
      { text: "Bone scan", correct: false },
      { text: "Fluoroscopy", correct: false },
    ],
  },
  {
    question: "A patient presents with a suspected scaphoid fracture, but the initial X-ray is negative. What is the next step in the management?",
    answers: [
      { text: "Repeat X-ray in 10-14 days", correct: true },
      { text: "MRI of the wrist", correct: false },
      { text: "CT scan of the wrist", correct: false },
      { text: "Ultrasound of the wrist", correct: false },
      { text: "Immediate casting without further imaging", correct: false },
    ],
  },
  {
    question: "What is the primary goal of conservative treatment in bone fractures?",
    answers: [
      { text: "To allow the bone to heal in its natural position", correct: true },
      { text: "To reduce the risk of infection", correct: false },
      { text: "To prevent the need for surgery", correct: false },
      { text: "To speed up the healing process", correct: false },
      { text: "To minimize pain", correct: false },
    ],
  },
  {
    question: "A 30-year-old man with a non-displaced midshaft humerus fracture is treated conservatively. What is the most appropriate method of immobilization?",
    answers: [
      { text: "Functional brace", correct: true },
      { text: "Hanging arm cast", correct: false },
      { text: "Plaster splint", correct: false },
      { text: "Sling and swathe", correct: false },
      { text: "Shoulder immobilizer", correct: false },
    ],
  },
  {
    question: "A 7-year-old boy falls off a playground slide and lands on his outstretched hand. He presents with severe pain, swelling, and an inability to move his elbow. X-ray imaging confirms a supracondylar fracture of the humerus. What is the most appropriate next step in management?",
    answers: [
      { text: "Immediate closed reduction and immobilization with a splint.", correct: true },
      { text: "Apply an ice pack and prescribe NSAIDs.", correct: false },
      { text: "Observation and follow-up in one week", correct: false },
      { text: "Refer for physiotherapy and range-of-motion exercises", correct: false },
      { text: "Perform surgical intervention to realign the bone fragments", correct: false },
    ],
  },
  {
    question: "What is the main advantage of using external fixation in open fractures?",
    answers: [
      { text: "Allows easy access to the wound for cleaning and monitoring", correct: true },
      { text: "Provides the strongest mechanical stability", correct: false },
      { text: "Reduces the need for anesthesia", correct: false },
      { text: "Minimizes scar formation", correct: false },
      { text: "Speeds up the bone healing process", correct: false },
    ],
  },
  {
    question: "A 28-year-old male presents with an open tibial fracture after a motorcycle accident. What is the initial step in the surgical treatment?",
    answers: [
      { text: "Debridement and irrigation", correct: true },
      { text: "Application of an external fixator", correct: false },
      { text: "Immediate internal fixation with a plate", correct: false },
      { text: "Primary wound closure", correct: false },
      { text: "Cast immobilization", correct: false },
    ],
  },
  {
    question: "A 28-year-old cyclist falls and lands on his outstretched hand, resulting in immediate pain and deformity in his forearm. On examination, there is visible angulation and significant swelling. X-ray shows a displaced fracture of both the radius and ulna. What is the most appropriate initial management for this injury?",
    answers: [
      { text: "Surgical intervention with open reduction and internal fixation", correct: true },
      { text: "Apply a pressure bandage and discharge", correct: false },
      { text: "Immediate closed reduction and immobilization with a splint", correct: false },
      { text: "Referral for outpatient casting", correct: false },
      { text: "Administration of NSAIDs and rest.", correct: false },
    ],
  },
  {
    question: "What is the most common cause of delayed union in fractures?",
    answers: [
      { text: "Inadequate immobilization", correct: true },
      { text: "Infection", correct: false },
      { text: "Poor blood supply", correct: false },
      { text: "Malnutrition", correct: false },
      { text: "Comminuted fracture", correct: false },
    ],
  },
  {
    question: "A patient with a history of smoking presents with delayed union of a femoral fracture 4 months after surgery. Which of the following is the most appropriate next step in management?",
    answers: [
      { text: "Application of a bone stimulator", correct: true },
      { text: "Bone grafting", correct: false },
      { text: "Increase calcium intake", correct: false },
      { text: "Revision surgery with internal fixation", correct: false },
      { text: "Prolonged immobilization", correct: false },
    ],
  },
  {
    question: "What is the most common type of shoulder dislocation?",
    answers: [
      { text: "Anterior", correct: true },
      { text: "Posterior", correct: false },
      { text: "Inferior", correct: false },
      { text: "Superior", correct: false },
      { text: "Medial", correct: false },
    ],
  },
  {
    question: "Which of the following is a common complication of anterior shoulder dislocation?",
    answers: [
      { text: "Axillary nerve injury", correct: true },
      { text: "Suprascapular nerve injury", correct: false },
      { text: "Radial nerve injury", correct: false },
      { text: "Ulnar nerve injury", correct: false },
      { text: "Brachial artery injury", correct: false },
    ],
  },
  {
    question: "A 25-year-old male presents with an anterior shoulder dislocation. What is the most appropriate initial management?",
    answers: [
      { text: "Closed reduction", correct: true },
      { text: "Surgical reduction", correct: false },
      { text: "Sling immobilization without reduction", correct: false },
      { text: "Immediate physical therapy", correct: false },
      { text: "Open reduction", correct: false },
    ],
  },
  {
    question: "Which of the following tests is most commonly used to assess a rotator cuff tear?",
    answers: [
      { text: "Drop arm test", correct: true },
      { text: "Phalen's test", correct: false },
      { text: "Tinel's sign", correct: false },
      { text: "Lachman test", correct: false },
      { text: "McMurray test", correct: false },
    ],
  },
  {
    question: "A 60-year-old patient presents with chronic shoulder pain and weakness. An MRI confirms a full-thickness tear of the supraspinatus tendon. What is the most appropriate treatment?",
    answers: [
      { text: "Arthroscopic repair", correct: true },
      { text: "Sling immobilization", correct: false },
      { text: "Physical therapy", correct: false },
      { text: "Corticosteroid injection", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "Which nerve is most at risk of injury in a posterior elbow dislocation?",
    answers: [
      { text: "Ulnar nerve", correct: true },
      { text: "Median nerve", correct: false },
      { text: "Radial nerve", correct: false },
      { text: "Axillary nerve", correct: false },
      { text: "Musculocutaneous nerve", correct: false },
    ],
  },
  {
    question: "A 45-year-old patient presents with a displaced radial head fracture. What is the recommended surgical treatment if there is significant comminution?",
    answers: [
      { text: "Radial head arthroplasty", correct: true },
      { text: "Radial head resection", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Application of an external fixator", correct: false },
    ],
  },
  {
    question: "Which complication is most commonly associated with scaphoid fractures?",
    answers: [
      { text: "Avascular necrosis", correct: true },
      { text: "Non-union", correct: false },
      { text: "Malunion", correct: false },
      { text: "Carpal tunnel syndrome", correct: false },
      { text: "Reflex sympathetic dystrophy", correct: false },
    ],
  },
  {
    question: "A patient presents with wrist pain after falling on an outstretched hand. The pain is localized to the anatomical snuffbox, and the initial X-ray is negative. What is the next step in management?",
    answers: [
      { text: "Thumb spica splint and repeat X-ray in 2 weeks", correct: true },
      { text: "Immediate MRI", correct: false },
      { text: "CT scan of the wrist", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
      { text: "NSAIDs and physical therapy", correct: false },
    ],
  },
  {
    question: "A baseball pitcher experiences pain on the inner side of their elbow after throwing a fastball. Which injury is most likely causing this pain?",
    answers: [
      { text: "Ulnar collateral ligament (UCL) injury", correct: true },
      { text: "Rotator cuff tear ", correct: false },
      { text: "Tennis elbow", correct: false },
      { text: "Achilles tendon rupture ", correct: false },
      { text: "Patellar tendonitis", correct: false },
    ],
  },
  {
    question: "What is the most common type of pelvic fracture in elderly patients?",
    answers: [
      { text: "Pubic rami fracture", correct: true },
      { text: "Sacral fracture", correct: false },
      { text: "Acetabular fracture", correct: false },
      { text: "Iliac wing fracture", correct: false },
      { text: "Ischial tuberosity fracture", correct: false },
    ],
  },
  {
    question: "Which of the following complications is most concerning in a patient with a pelvic fracture?",
    answers: [
      { text: "Hemorrhage", correct: true },
      { text: "Nerve injury", correct: false },
      { text: "Urinary retention", correct: false },
      { text: "Deep vein thrombosis", correct: false },
      { text: "Hip dislocation", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman presents with a pelvic fracture after a fall. She is hemodynamically unstable. What is the most appropriate initial management?",
    answers: [
      { text: "Pelvic binder and fluid resuscitation", correct: true },
      { text: "Immediate pelvic surgery", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Bed rest and observation", correct: false },
      { text: "Immediate transfer to the operating room for fixation", correct: false },
    ],
  },
  {
    question: "Which of the following fractures is also known as a distal radius fracture?",
    answers: [
      { text: "Colles fracture", correct: true },
      { text: "Greenstick fracture", correct: false },
      { text: "Compression fracture", correct: false },
      { text: "Spiral fracture", correct: false },
      { text: "Compound fracture", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the difference between a Colles fracture and a Smith fracture?",
    answers: [
      { text: "A Colles fracture is a stable break, while a Smith fracture is always unstable.", correct: true },
      { text: "A Colles fracture is a break in the femur, while a Smith fracture is a break in the tibia.", correct: false },
      { text: "A Colles fracture involves dorsal displacement of the wrist, while a Smith fracture involves volar displacement.", correct: false },
      { text: "A Colles fracture does not involve any displacement, while a Smith fracture always does.", correct: false },
      { text: "A Colles fracture affects the wrist joint, while a Smith fracture affects the elbow joint.", correct: false },
    ],
  },
  {
    question: "45-year-old man falls on an outstretched hand and presents to the emergency room with pain, swelling, and deformity of the wrist. An X-ray reveals a fracture of the distal radius with dorsal displacement. Which type of fracture is this likely to be, and what is the initial management step?",
    answers: [
      { text: "Colles fracture; Immobilize the wrist and refer for orthopedic evaluation", correct: true },
      { text: "Greenstick fracture; Apply a cast immediately", correct: false },
      { text: "Smith fracture; Proceed to surgical intervention.", correct: false },
      { text: "Compression fracture; Perform immediate reduction and pinning.", correct: false },
      { text: "Scaphoid fracture; Administer pain medication and discharge.", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman presents with severe wrist pain after a fall. Physical examination reveals tenderness over the anatomical snuffbox. Considering the mechanism and symptoms, what is the most likely diagnosis, and what is the immediate management?",
    answers: [
      { text: "Scaphoid fracture; Immobilization of the wrist and referral for an orthopedic evaluation", correct: true },
      { text: "Colles fracture; Immediate casting", correct: false },
      { text: "Metacarpal fracture; Surgical intervention", correct: false },
      { text: "Smith fracture; Application of a splint and pain management", correct: false },
      { text: "Carpal tunnel syndrome; Administration of corticosteroids", correct: false },
    ],
  },
  {
    question: "A 25-year-old man was involved in a motorcycle accident, resulting in a hyperextension injury to the wrist. The patient complains of pain and swelling in the wrist joint. X-ray shows a lunate dislocation. What should be the next step in management?",
    answers: [
      { text: "Immediate closed reduction and splinting", correct: true },
      { text: "Apply an ice pack and observe.", correct: false },
      { text: "Give a corticosteroid injection", correct: false },
      { text: "Administer pain medication and discharge", correct: false },
      { text: "Perform open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "Which of the following statements correctly differentiates between a wrist sprain and a wrist fracture?",
    answers: [
      { text: "A wrist fracture generally involves a break in the bone, whereas a wrist sprain involves injury to the ligaments.", correct: true },
      { text: "A wrist sprain always involves bone displacement, while a wrist fracture does not.", correct: false },
      { text: "A wrist sprain typically presents with severe deformity and bone protrusion.", correct: false },
      { text: "A wrist sprain is less painful and does not cause any swelling.", correct: false },
      { text: "A wrist fracture can be managed conservatively with rest, while a wrist sprain always requires surgical intervention.", correct: false },
    ],
  },
  {
    question: "A 50-year-old man presents with wrist pain and an inability to extend his fingers following a fall. Physical examination reveals a palpable gap in the wrist and loss of hand function. X-ray confirms a perilunate dislocation. What is the appropriate treatment for this injury?",
    answers: [
      { text: "Immediate reduction and surgical intervention", correct: true },
      { text: "Wrist splinting and physiotherapy", correct: false },
      { text: "Corticosteroid injection and observation", correct: false },
      { text: "Administration of NSAIDs and rest.", correct: false },
      { text: "Closed reduction without surgery", correct: false },
    ],
  },
  {
    question: "Which of the following best describes a Garden III femoral neck fracture?",
    answers: [
      { text: "Complete fracture with partial displacement", correct: true },
      { text: "Incomplete fracture with minimal displacement", correct: false },
      { text: "Intertrochanteric fracture with displacement", correct: false },
      { text: "Complete fracture with full displacement", correct: false },
      { text: "Subcapital fracture without displacement", correct: false },
    ],
  },
  {
    question: "An elderly woman with a history of osteoporosis presents with a displaced intertrochanteric hip fracture. What is the most appropriate surgical treatment?",
    answers: [
      { text: "Dynamic hip screw (DHS) fixation", correct: true },
      { text: "Hemiarthroplasty", correct: false },
      { text: "Non-operative management with traction", correct: false },
      { text: "Total hip arthroplasty", correct: false },
      { text: "External fixation", correct: false },
    ],
  },
  {
    question: "A soccer player reports sharp pain in the groin area during kicking movements. Which injury is commonly associated with this type of pain?",
    answers: [
      { text: "Hip labral tear", correct: true },
      { text: "Patellar tendonitis", correct: false },
      { text: "IT band syndrome", correct: false },
      { text: "Meniscus tear", correct: false },
      { text: " Plantar fasciitis", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common location for a femur fracture in young adults?",
    answers: [
      { text: "Femoral shaft", correct: true },
      { text: "Femoral neck", correct: false },
      { text: "Intertrochanteric region", correct: false },
      { text: "Subtrochanteric region", correct: false },
      { text: "Distal femur", correct: false },
    ],
  },
  {
    question: "What is the primary concern in managing femoral shaft fractures?",
    answers: [
      { text: "Blood loss", correct: true },
      { text: "Infection", correct: false },
      { text: "Malunion", correct: false },
      { text: "Avascular necrosis", correct: false },
      { text: "Osteoarthritis", correct: false },
    ],
  },
  {
    question: "A 25-year-old male presents with a closed femoral shaft fracture following a motor vehicle accident. What is the most appropriate surgical treatment?",
    answers: [
      { text: "Intramedullary nailing", correct: true },
      { text: "External fixation", correct: false },
      { text: "Plate and screw fixation", correct: false },
      { text: "Hemiarthroplasty", correct: false },
      { text: "Cast immobilization", correct: false },
    ],
  },
  {
    question: "A dancer experiences pain on the side of the hip that worsens with walking or running. Which condition is often characterized by this type of hip pain?",
    answers: [
      { text: "Hip bursitis", correct: true },
      { text: "ACL tear", correct: false },
      { text: "E. Plantar fasciitis ", correct: false },
      { text: "Achilles tendon rupture", correct: false },
      { text: "Shin splints", correct: false },
    ],
  },
  {
    question: "What is the most commonly injured ligament in the knee?",
    answers: [
      { text: "Anterior cruciate ligament (ACL)", correct: true },
      { text: "Posterior cruciate ligament (PCL)", correct: false },
      { text: "Medial collateral ligament (MCL)", correct: false },
      { text: "Lateral collateral ligament (LCL)", correct: false },
      { text: "Patellar ligament", correct: false },
    ],
  },
  {
    question: "Which test is most commonly used to diagnose an anterior cruciate ligament (ACL) tear?",
    answers: [
      { text: "Lachman test", correct: true },
      { text: "McMurray test", correct: false },
      { text: "Posterior drawer test", correct: false },
      { text: "Varus stress test", correct: false },
      { text: "Valgus stress test", correct: false },
    ],
  },
  {
    question: "A patient sustained an injury to his knee with a twisting force. On examination, pain is felt more on the medial femoral side of the knee than the tibial side. The injured structure might be:",
    answers: [
      { text: "Medial meniscus", correct: true },
      { text: "Medial collateral ligament", correct: false },
      { text: "Patellar tendon", correct: false },
      { text: "Anterior cruciate ligament", correct: false },
      { text: "Lateral meniscus", correct: false },
    ],
  },
  {
    question: "A basketball player lands awkwardly after a jump and feels a popping sensation in their knee. Which injury is most likely to have occurred in this scenario?",
    answers: [
      { text: "Meniscus tear", correct: true },
      { text: "Tennis elbow", correct: false },
      { text: "Rotator cuff tear", correct: false },
      { text: "Plantar fasciitis", correct: false },
      { text: "Achilles tendon rupture", correct: false },
    ],
  },
  {
    question: "Which of the following is the primary treatment for a non-displaced transverse patella fracture?",
    answers: [
      { text: "Knee immobilization", correct: true },
      { text: "Open reduction and internal fixation", correct: false },
      { text: "Partial patellectomy", correct: false },
      { text: "Patellar tendon repair", correct: false },
      { text: "Total patellectomy", correct: false },
    ],
  },
  {
    question: "A 35-year-old male presents with a displaced comminuted patella fracture after a fall. What is the most appropriate surgical intervention?",
    answers: [
      { text: "Open reduction and internal fixation", correct: true },
      { text: "Total patellectomy", correct: false },
      { text: "Partial patellectomy", correct: false },
      { text: "Patellar tendon repair", correct: false },
      { text: "External fixation", correct: false },
    ],
  },
  {
    question: "Which of the following complications is most commonly associated with tibial shaft fractures?",
    answers: [
      { text: "Compartment syndrome", correct: true },
      { text: "Fat embolism", correct: false },
      { text: "Malunion", correct: false },
      { text: "Non-union", correct: false },
      { text: "Osteomyelitis", correct: false },
    ],
  },
  {
    question: "A 30-year-old female presents with an open tibial shaft fracture after a motorcycle accident. What is the first step in the management of this injury?",
    answers: [
      { text: "Administration of IV antibiotics", correct: true },
      { text: "Surgical debridement", correct: false },
      { text: "Application of an external fixator", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
      { text: "Casting and immobilization", correct: false },
    ],
  },
  {
    question: "A 30-year-old recreational athlete presents to the emergency department with a swollen and painful ankle following a misstep during a basketball game. Examination and X-rays confirm a lateral malleolus fracture without displacement. What is the most appropriate initial treatment for this patient?",
    answers: [
      { text: "Ankle brace and early mobilization with weight-bearing as tolerated", correct: true },
      { text: "Immediate surgical fixation with plates and screws", correct: false },
      { text: "Non-weight-bearing immobilization in a cast for 6-8 weeks ", correct: false },
      { text: "Closed reduction and casting under sedation", correct: false },
      { text: "Referral to physical therapy for range of motion exercises", correct: false },
    ],
  },
  {
    question: "Which of the following foot injuries is characterized by the inflammation of the tissue connecting the heel bone to the toes? ",
    answers: [
      { text: "Plantar fasciitis", correct: true },
      { text: "Achilles tendon rupture", correct: false },
      { text: "Stress fracture", correct: false },
      { text: "Turf toe", correct: false },
      { text: "Metatarsal stress fracture ", correct: false },
    ],
  },
  {
    question: "Explain the mechanism of injury commonly associated with a Lisfranc injury in the foot.",
    answers: [
      { text: "Hyperextension of the foot", correct: true },
      { text: "Incorrectly fitting shoes", correct: false },
      { text: "Direct impact to the toe", correct: false },
      { text: "Sudden twisting of the ankle ", correct: false },
      { text: "Overpronation", correct: false },
    ],
  },
  {
    question: "A runner experiences sharp pain and swelling in the ankle after rolling it during a trail run. Which injury is the runner likely to have sustained?",
    answers: [
      { text: "Turf toe", correct: true },
      { text: "Stress fracture", correct: false },
      { text: "Shin splints", correct: false },
      { text: "Achilles tendon rupture", correct: false },
      { text: "Plantar fasciitis", correct: false },
    ],
  },
  {
    question: "A hiker complains of pain in the heel that is especially intense in the morning or after prolonged sitting. Which condition is commonly associated with these symptoms?",
    answers: [
      { text: "Plantar fasciitis", correct: true },
      { text: "Stress fracture", correct: false },
      { text: "Lisfranc injury", correct: false },
      { text: "Achilles tendon rupture", correct: false },
      { text: "Metatarsal stress fracture", correct: false },
    ],
  },
  {
    question: "Which test is most commonly used to diagnose an injury to the anterior talofibular ligament (ATFL)?",
    answers: [
      { text: "Anterior drawer test", correct: true },
      { text: "Talar tilt test", correct: false },
      { text: "Squeeze test", correct: false },
      { text: "External rotation test", correct: false },
      { text: "Thompson test", correct: false },
    ],
  },
  {
    question: "A 25-year-old female presents with ankle pain and swelling after an inversion injury. She is unable to bear weight. What is the most appropriate next step in management?",
    answers: [
      { text: "X-ray of the ankle", correct: true },
      { text: "Application of an ankle brace", correct: false },
      { text: "NSAIDs and rest", correct: false },
      { text: "MRI of the ankle", correct: false },
      { text: "Physical therapy", correct: false },
    ],
  },
  {
    question: "A motorcyclist involved in a crash presents with severe pain in the pelvic region and difficulty bearing weight on one leg. Which type of pelvic injury is most likely to be suspected in this scenario?",
    answers: [
      { text: "Quadriceps strain", correct: true },
      { text: "Hip dislocation", correct: false },
      { text: "Hip bursitis", correct: false },
      { text: "Sacral fracture", correct: false },
      { text: "Patellar tendonitis", correct: false },
    ],
  },
  {
    question: "What is the most common site of a stress fracture in the foot?",
    answers: [
      { text: "Second metatarsal", correct: true },
      { text: "First metatarsal", correct: false },
      { text: "Fifth metatarsal", correct: false },
      { text: "Calcaneus", correct: false },
      { text: "Talus", correct: false },
    ],
  },
  {
    question: "Which of the following is a characteristic finding of a Lisfranc injury?",
    answers: [
      { text: "Diastasis between the first and second metatarsals", correct: true },
      { text: "Fracture of the fifth metatarsal base", correct: false },
      { text: "Avulsion of the navicular bone", correct: false },
      { text: "Displacement of the talus", correct: false },
      { text: "Fracture of the calcaneus", correct: false },
    ],
  },
  {
    question: "Describe the difference between a compression fracture and a burst fracture in the context of spinal injuries.",
    answers: [
      { text: "A compression fracture is often asymptomatic, while a burst fracture leads to immediate neurological deficits.", correct: true },
      { text: "A compression fracture is more commonly seen in the lumbar spine, while a burst fracture typically occurs in the cervical spine.", correct: false },
      { text: "A compression fracture involves the collapse of a vertebra due to trauma or osteoporosis, while a burst fracture results in the vertebra shattering into multiple pieces.", correct: false },
      { text: "A compression fracture requires surgical intervention, while a burst fracture may be managed conservatively with bracing.", correct: false },
      { text: "A compression fracture is caused by axial loading forces, while a burst fracture is the result of hyperflexion injuries.", correct: false },
    ],
  },
  {
    question: "A patient is brought into the emergency room following a fall from a significant height. They have lost sensation and motor function below the waist. Which type of spinal injury is most likely to be indicated by these symptoms?",
    answers: [
      { text: "Spinal cord contusion", correct: true },
      { text: "Spinal stenosis", correct: false },
      { text: "Herniated disc", correct: false },
      { text: "Degenerative disc disease", correct: false },
      { text: "Scoliosis", correct: false },
    ],
  },
  {
    question: "A 30-year-old male presents with pain and swelling over the midfoot after a high-impact injury. X-ray shows widening of the space between the first and second metatarsal bases. What is the most likely diagnosis?",
    answers: [
      { text: "Lisfranc injury", correct: true },
      { text: "Jones fracture", correct: false },
      { text: "Calcaneal fracture", correct: false },
      { text: "Talus fracture", correct: false },
      { text: "Metatarsal stress fracture", correct: false },
    ],
  },
  {
    question: "Which of the following chest injuries is characterized by a segment of the rib cage moving independently from the rest of the chest wall due to multiple rib fractures?",
    answers: [
      { text: "Flail chest", correct: true },
      { text: "Pneumothorax", correct: false },
      { text: "Pulmonary contusion", correct: false },
      { text: "Hiatal hernia ", correct: false },
      { text: "Pleural effusion", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is characterized by the collection of air or gas in the pleural cavity, leading to lung collapse and chest pain?",
    answers: [
      { text: "Pneumothorax", correct: true },
      { text: "Hemothorax", correct: false },
      { text: "Flail chest", correct: false },
      { text: "Pulmonary contusion", correct: false },
      { text: "Rib fracture", correct: false },
    ],
  },
  {
    question: "What is the term for a serious condition where there is a collection of blood in the pleural space, often resulting from chest trauma?",
    answers: [
      { text: "Hemothorax", correct: true },
      { text: "Pneumothorax", correct: false },
      { text: "Tension pneumothorax", correct: false },
      { text: "Flail chest ", correct: false },
      { text: "Pulmonary contusion", correct: false },
    ],
  },
  {
    question: "A patient involved in a car accident presents with difficulty breathing, sharp chest pain, and visible bruising over the chest wall. Which type of chest injury should be suspected in this case?",
    answers: [
      { text: "Rib fracture", correct: true },
      { text: "Pneumothorax", correct: false },
      { text: "Pulmonary contusion", correct: false },
      { text: "Hiatal hernia", correct: false },
      { text: "Pleural effusion", correct: false },
    ],
  },
  {
    question: "A football player is tackled forcefully and sustains a blow to the chest. Shortly after, they experience rapid breathing, chest tightness, and cough up blood-tinged sputum. What type of chest injury is likely to have occurred?",
    answers: [
      { text: "Hemothorax", correct: true },
      { text: "Flail chest", correct: false },
      { text: "Pneumomediastinum", correct: false },
      { text: "Cardiac tamponade", correct: false },
      { text: "Costochondritis", correct: false },
    ],
  },
  {
    question: "Explain the difference between osteoarthritis and rheumatoid arthritis in terms of pathophysiology and joint involvement.",
    answers: [
      { text: "Osteoarthritis primarily affects weight-bearing joints, while rheumatoid arthritis can affect multiple joints symmetrically.", correct: true },
      { text: "Osteoarthritis is an autoimmune disease, while rheumatoid arthritis is caused by wear and tear.", correct: false },
      { text: "Osteoarthritis can be cured with medication, while rheumatoid arthritis requires surgical intervention.", correct: false },
      { text: "Osteoarthritis is characterized by joint inflammation, while rheumatoid arthritis is characterized by bone spurs.", correct: false },
      { text: "Osteoarthritis is more common in young adults, while rheumatoid arthritis is more common in the elderly.", correct: false },
    ],
  },
  {
    question: "Describe the role of joint cartilage in the development and progression of osteoarthritis.",
    answers: [
      { text: "Joint cartilage in osteoarthritis undergoes degeneration and loss, causing bones to rub against each other.", correct: true },
      { text: "Joint cartilage in osteoarthritis becomes inflamed and swollen, leading to pain and stiffness. ", correct: false },
      { text: "Joint cartilage in osteoarthritis becomes denser and thicker, affecting joint mobility.", correct: false },
      { text: "Joint cartilage in osteoarthritis secretes excess fluid, leading to joint effusion", correct: false },
      { text: "Joint cartilage in osteoarthritis develops immune complexes, triggering an inflammatory response. ", correct: false },
    ],
  },
  {
    question: "A 57-year-old woman presents with gradually worsening pain and stiffness in her right knee. She mentions that the pain is worse after prolonged walking or climbing stairs. Upon examination, crepitus is noted in the affected joint. What type of osteoarthritis is most likely affecting this patient?",
    answers: [
      { text: "Primary osteoarthritis", correct: true },
      { text: "Secondary osteoarthritis", correct: false },
      { text: "Inflammatory osteoarthritis", correct: false },
      { text: "Post-traumatic osteoarthritis", correct: false },
      { text: "Metabolic osteoarthritis", correct: false },
    ],
  },
  {
    question: "A 65-year-old man presents with chronic pain and swelling in his hands, particularly in the joints of his fingers. He reports that the pain is worse in the morning and improves throughout the day with activity. X-rays reveal joint space narrowing and osteophyte formation. Which type of osteoarthritis is likely affecting this patient?",
    answers: [
      { text: "Primary osteoarthritis", correct: true },
      { text: "Secondary osteoarthritis", correct: false },
      { text: "Inflammatory osteoarthritis", correct: false },
      { text: "Post-traumatic osteoarthritis", correct: false },
      { text: "Metabolic osteoarthritis", correct: false },
    ],
  },
  {
    question: "Discuss the role of risk factors such as obesity, age, and joint overuse in the development of osteoarthritis.",
    answers: [
      { text: "Obesity, age, and joint overuse are all significant risk factors for developing osteoarthritis. ", correct: true },
      { text: "Obesity increases the risk of osteoarthritis due to decreased joint stress, while age is not a ", correct: false },
      { text: "Age is a protective factor against osteoarthritis, while joint overuse is the primary cause of the condition. ", correct: false },
      { text: "Joint overuse contributes to the development of osteoarthritis by promoting cartilage regeneration. ", correct: false },
      { text: "Obesity is linked to osteoarthritis through reduced joint inflammation, while age plays a minor role. ", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman with a history of knee injuries and long-standing obesity presents with bilateral knee pain, stiffness, and difficulty walking. She reports that her symptoms have gradually worsened over the past few years. On examination, there is joint tenderness and limited range of motion in both knees. What type of osteoarthritis is most likely affecting this patient?",
    answers: [
      { text: "Secondary osteoarthritis", correct: true },
      { text: "Primary osteoarthritis", correct: false },
      { text: "Metabolic osteoarthritis", correct: false },
      { text: "Inflammatory osteoarthritis", correct: false },
      { text: "Post-traumatic osteoarthritis", correct: false },
    ],
  },
  {
    question: "A 55-year-old man with osteoarthritis in his knee seeks advice on managing his symptoms. He has tried over-the-counter pain medications with limited relief and is looking for alternative treatments. Which of the following non-pharmacological interventions is commonly recommended for managing osteoarthritis symptoms in weight-bearing joints like the knee?",
    answers: [
      { text: "Hot and cold therapy", correct: true },
      { text: "High-impact aerobic exercises", correct: false },
      { text: "Prolonged bed rest", correct: false },
      { text: "Immobilization with a brace", correct: false },
      { text: "Corticosteroid injections", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is most commonly associated with an L5-S1 disc herniation?",
    answers: [
      { text: "Weakness of ankle plantarflexion", correct: true },
      { text: "Weakness of knee extension", correct: false },
      { text: "Weakness of hip abduction", correct: false },
      { text: "Weakness of great toe dorsiflexion", correct: false },
      { text: "Loss of patellar reflex", correct: false },
    ],
  },
  {
    question: "A 40-year-old male presents with lower back pain radiating down the posterior aspect of his right leg. MRI confirms an L5-S1 disc herniation. What is the most appropriate initial management?",
    answers: [
      { text: "Physical therapy and NSAIDs", correct: true },
      { text: "Lumbar laminectomy", correct: false },
      { text: "Epidural steroid injection", correct: false },
      { text: "Microdiscectomy", correct: false },
      { text: "Spinal fusion", correct: false },
    ],
  },
  {
    question: "A newborn infant is brought in for a routine check-up, and the pediatrician observes asymmetry in the gluteal skin folds and limited abduction of the affected hip during the Ortolani maneuver. The infant's left leg appears slightly shorter than the right leg. What type of hip condition is suspected in this newborn?",
    answers: [
      { text: "Congenital dislocation of the hip (CDH)", correct: true },
      { text: "Hip labral tear", correct: false },
      { text: "Hip bursitis", correct: false },
      { text: "Piriformis syndrome", correct: false },
      { text: "Sacroiliitis", correct: false },
    ],
  },
  {
    question: "What is the most common type of thoracic vertebral fracture?",
    answers: [
      { text: "Compression fracture", correct: true },
      { text: "Burst fracture", correct: false },
      { text: "Wedge fracture", correct: false },
      { text: "Flexion-distraction fracture", correct: false },
      { text: "Transverse process fracture", correct: false },
    ],
  },
  {
    question: "Which of the following is the most likely cause of a compression fracture in the thoracic spine?",
    answers: [
      { text: "Osteoporosis", correct: true },
      { text: "Trauma", correct: false },
      { text: "Metastatic cancer", correct: false },
      { text: "Infection", correct: false },
      { text: "Primary bone tumor", correct: false },
    ],
  },
  {
    question: "Compare and contrast the characteristics and treatment approaches for congenital clubfoot, club hand, syndactyly, and polydactyly. ",
    answers: [
      { text: "Clubfoot and club hand are both characterized by abnormal curving or positioning of the limbs, while syndactyly and polydactyly involve variations in the number or fusion of digits.", correct: true },
      { text: "All conditions involve abnormal fusion of digits, with clubfoot affecting the foot, club hand affecting the hand, syndactyly involving webbed fingers or toes, and polydactyly featuring extra digits.", correct: false },
      { text: "Congenital limb deformities are always hereditary and cannot be influenced by environmental factors.", correct: false },
      { text: "Treatment for clubfoot typically involves casting, stretching, and possibly surgery, while syndactyly and polydactyly may require surgical correction for functional and cosmetic reasons.", correct: false },
      { text: "Syndactyly and polydactyly are always present together in the same individual, while clubfoot and club hand are separate and distinct conditions.", correct: false },
    ],
  },
  {
    question: "A 75-year-old female with a history of osteoporosis presents with acute back pain after a minor fall. X-rays reveal a compression fracture of the T12 vertebra. What is the most appropriate initial management?",
    answers: [
      { text: "Pain management and bracing", correct: true },
      { text: "Vertebroplasty", correct: false },
      { text: "Kyphoplasty", correct: false },
      { text: "Spinal fusion", correct: false },
      { text: "Physical therapy", correct: false },
    ],
  },
  {
    question: "A 6-month-old infant is diagnosed with congenital clubfoot and syndactyly in the left foot and hand. The orthopedic surgeon recommends a comprehensive treatment plan to address both conditions. What treatment approach is typically recommended for managing congenital clubfoot and syndactyly simultaneously?",
    answers: [
      { text: "Serial casting and stretching exercises", correct: true },
      { text: "Surgical fusion of the affected digits", correct: false },
      { text: "Orthotic devices and splints ", correct: false },
      { text: "Physical therapy only", correct: false },
      { text: "Amputation of the affected limb ", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is most commonly associated with a C5-C6 disc herniation?",
    answers: [
      { text: "Weakness in shoulder abduction", correct: true },
      { text: "Weakness in elbow extension", correct: false },
      { text: "Loss of biceps reflex", correct: false },
      { text: "Loss of triceps reflex", correct: false },
      { text: "Paresthesia in the little finger", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is characterized by excessive outward curvature of the thoracic spine, often resulting in a rounded or hunched back?",
    answers: [
      { text: "Kyphosis", correct: true },
      { text: "Scoliosis", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
      { text: "Lordosis", correct: false },
      { text: "Spondylolisthesis", correct: false },
    ],
  },
  {
    question: "A 45-year-old male patient presents with chronic lower back pain and radiating leg pain for the past 6 months. Physical examination and imaging reveal lumbar spinal stenosis at the L3-L4 level causing compression of the nerve roots. The patient experiences relief when leaning forward or sitting. What is the most appropriate treatment approach for this patient?",
    answers: [
      { text: "Physical therapy focusing on lumbar extension exercises ", correct: true },
      { text: "Immediate surgical decompression", correct: false },
      { text: "Prescription of opioid pain medications", correct: false },
      { text: "Epidural steroid injections", correct: false },
      { text: "Referral for acupuncture therapy", correct: false },
    ],
  },
  {
    question: "A 35-year-old male presents with neck pain and numbness in his right arm after a car accident. MRI confirms a C5-C6 disc herniation. What is the most appropriate initial management?",
    answers: [
      { text: "Cervical collar and physical therapy", correct: true },
      { text: "Anterior cervical discectomy and fusion (ACDF)", correct: false },
      { text: "Posterior cervical laminectomy", correct: false },
      { text: "Epidural steroid injection", correct: false },
      { text: "Spinal fusion", correct: false },
    ],
  },
  {
    question: "Which of the following bone tumors is characterized by the presence of giant cells within the tumor mass? ",
    answers: [
      { text: "Giant cell tumor of bone", correct: true },
      { text: "Osteosarcoma", correct: false },
      { text: "Chondrosarcoma", correct: false },
      { text: "Fibrosarcoma", correct: false },
      { text: "Ewing's sarcoma", correct: false },
    ],
  },
  {
    question: "Osteochondropathy and osteodystrophy are conditions that affect the bones and joints. Which of the following statements best describes osteochondropathy?",
    answers: [
      { text: "Osteochondropathy refers to a group of disorders that affect the growth centers in children and adolescents.", correct: true },
      { text: "Osteochondropathy is a degenerative joint disease that primarily affects older individuals.", correct: false },
      { text: "Osteochondropathy is a type of bone tumor that arises from abnormal bone growth.", correct: false },
      { text: "Osteochondropathy is a metabolic bone disorder characterized by defective mineralization.", correct: false },
      { text: "Osteochondropathy is a genetic disorder that causes abnormal bone development", correct: false },
    ],
  },
  {
    question: "Bone tumors can be classified as benign or malignant. Which of the following statements is true regarding benign bone tumors?",
    answers: [
      { text: "Benign bone tumors do not pose a risk of spreading to other tissues", correct: true },
      { text: "Benign bone tumors are more likely to metastasize to other parts of the body. ", correct: false },
      { text: "Benign bone tumors are always fast-growing and have a high mortality rate", correct: false },
      { text: "Benign bone tumors are always painful and aggressive", correct: false },
      { text: "Benign bone tumors are usually treated with chemotherapy and radiation therapy", correct: false },
    ],
  },
  {
    question: "A 14-year-old male presents with knee pain and limping. Imaging reveals an osteochondral defect in the femoral condyle. What is the most appropriate initial treatment approach for this patient?",
    answers: [
      { text: "Refer to an orthopedic surgeon for further evaluation and management", correct: true },
      { text: "Immediate surgical removal of the defect", correct: false },
      { text: "Initiation of corticosteroid therapy", correct: false },
      { text: "Physical therapy focusing on strengthening exercises", correct: false },
      { text: "Application of a knee brace for immobilization", correct: false },
    ],
  },
  {
    question: "A 30-year-old female presents with persistent bone pain and swelling in the upper arm. Imaging reveals a lytic lesion with cortical destruction in the proximal humerus. What is the most likely diagnosis, and what further diagnostic steps should be taken to confirm the diagnosis?",
    answers: [
      { text: "Osteosarcoma; perform a bone biopsy for histological analysis", correct: true },
      { text: "Ewing's sarcoma; order a PET-CT scan for staging", correct: false },
      { text: "Chondrosarcoma; proceed with surgical excision of the lesion ", correct: false },
      { text: "Giant cell tumor of bone; monitor with serial imaging studies", correct: false },
      { text: "Fibrosarcoma; initiate chemotherapy and radiation therapy", correct: false },
    ],
  },
  {
    question: "What is the term used to describe a common acquired foot deformity that involves the inward collapse of the arch of the foot, leading to pain and difficulty walking?",
    answers: [
      { text: "Flatfoot (Pes planus)", correct: true },
      { text: "Hallux valgus", correct: false },
      { text: "Plantar fasciitis", correct: false },
      { text: "Hammer toe", correct: false },
      { text: "Pes cavus ", correct: false },
    ],
  },
  {
    question: "A 50-year-old male presents with chronic foot pain and a noticeable bunion deformity at the base of the big toe. What conservative measures can be recommended as the initial treatment approach for managing the bunion deformity?",
    answers: [
      { text: "Custom orthotic shoe inserts", correct: true },
      { text: "Immediate surgical correction with bunionectomy", correct: false },
      { text: "Referral to a physical therapist for gait training", correct: false },
      { text: "Administration of corticosteroid injections", correct: false },
      { text: "Application of splints to the affected foot", correct: false },
    ],
  },
  {
    question: "A 65-year-old female patient with diabetes presents with a severe claw toe deformity affecting her toes. What special considerations should be taken into account when planning the treatment approach for this patient's foot deformity?",
    answers: [
      { text: "Close monitoring of foot ulcers and infection risk", correct: true },
      { text: "Immediate surgical correction with toe arthroplasty", correct: false },
      { text: "Aggressive physical therapy to correct the deformity", correct: false },
      { text: "Application of over-the-counter toe splints for correction", correct: false },
      { text: "Regular corticosteroid injections for pain management", correct: false },
    ],
  },
  {
    question: "for a case of non-union of a long bone fracture,which drug helps improve the chance of union?",
    answers: [
      { text: "bone morphogenic protein", correct: true },
      { text: "calcium phosphate", correct: false },
      { text: "calcium sulphate", correct: false },
      { text: "PMMA", correct: false },
      { text: " all stated", correct: false },
    ],
  },
  {
    question: "tarsometatarsal amputation is also known as",
    answers: [
      { text: "lisfranc,s amputation", correct: true },
      { text: "choparts amputation", correct: false },
      { text: "none of stated", correct: false },
      { text: "pirogoffs amputation", correct: false },
      { text: "symes amputation", correct: false },
    ],
  },
  {
    question: "myodesis is employed for amputation for all of the following indication except?",
    answers: [
      { text: "ischemia", correct: true },
      { text: "trauma", correct: false },
      { text: "tumor", correct: false },
      { text: "children", correct: false },
      { text: " all stated", correct: false },
    ],
  },
  {
    question: "pain due to post amputation neuroma is best treated by ",
    answers: [
      { text: "surgical excision", correct: true },
      { text: "infrared therapy", correct: false },
      { text: "interference therapy", correct: false },
      { text: "ultrasound therapy", correct: false },
      { text: "none of stated", correct: false },
    ],
  },
  {
    question: "All of the following are the biochemical changes seen in osteomalacia except?",
    answers: [
      { text: "serum calcium increases", correct: true },
      { text: "serum calcium decreases", correct: false },
      { text: "serum calcium normal", correct: false },
      { text: "serum ALP increases", correct: false },
      { text: "none of stated", correct: false },
    ],
  },
  {
    question: "Which of the following is seen in osteoporosis?",
    answers: [
      { text: "normal Ca,normal PO4,normal alkaline phosphatise", correct: true },
      { text: "low Ca,high po4,high ALP", correct: false },
      { text: "low Ca,low po4, low alkaline phosphatise", correct: false },
      { text: "none of stated", correct: false },
      { text: "low Ca, low PO4. Normal alkaline phosphatise", correct: false },
    ],
  },
  {
    question: "which of the following is the best method to assess healing in a case of rickets?",
    answers: [
      { text: "xray ", correct: true },
      { text: "serum vitamin D levels", correct: false },
      { text: "serum alkaline phosphatise levels", correct: false },
      { text: "none of stated", correct: false },
      { text: "serum calcium level", correct: false },
    ],
  },
  {
    question: "True about supracondylar humerus fracture is",
    answers: [
      { text: "nerve injury manifestation are transitory", correct: true },
      { text: "distal fragment is most commonly dislocated anteriorly", correct: false },
      { text: " cubitus valgus malunion is more common than cubitas varus", correct: false },
      { text: "causes weakness of elbow flexion", correct: false },
      { text: " all stated", correct: false },
    ],
  },
  {
    question: ". Most prominent part on examination of elbow in posterior dislocation of elbow is?",
    answers: [
      { text: "olecranon", correct: true },
      { text: "radial head", correct: false },
      { text: "coronoid", correct: false },
      { text: "lateral condyle", correct: false },
      { text: " all stated", correct: false },
    ],
  },
  {
    question: "Which instrumental diagnostic method is commonly used to evaluate bone fractures and is considered a standard imaging modality?",
    answers: [
      { text: "X-ray", correct: true },
      { text: "MRI (Magnetic Resonance Imaging) ", correct: false },
      { text: "CT (Computed Tomography)", correct: false },
      { text: "Bone scan", correct: false },
      { text: "Ultrasound", correct: false },
    ],
  },
  {
    question: "A patient presents with persistent back pain after a fall, and conventional X-rays are inconclusiv  What imaging method is commonly used to assess spinal fractures and instability?",
    answers: [
      { text: "CT (Computed Tomography)", correct: true },
      { text: "X-ray", correct: false },
      { text: "MRI (Magnetic Resonance Imaging)", correct: false },
      { text: "Ultrasound", correct: false },
      { text: "Bone scan", correct: false },
    ],
  },
  {
    question: "A patient with suspected stress fractures in the lower extremities is evaluated for bone changes over tim  What imaging modality is suitable for detecting stress fractures and monitoring healing progression?",
    answers: [
      { text: "Bone scan", correct: true },
      { text: "CT (Computed Tomography)", correct: false },
      { text: "X-ray", correct: false },
      { text: "MRI (Magnetic Resonance Imaging)", correct: false },
      { text: "Ultrasound", correct: false },
    ],
  },
  {
    question: "What is a common non-surgical method used to immobilize and support a fractured bone during the healing process?",
    answers: [
      { text: "Casting", correct: true },
      { text: "External fixation", correct: false },
      { text: "Intramedullary nailing", correct: false },
      { text: "closed reduction and internal fixation (ORIF) ", correct: false },
      { text: "Traction", correct: false },
    ],
  },
  {
    question: "A patient with a non-displaced, stable ankle fracture is prescribed a weight-bearing device that allows early ambulation. What non-surgical treatment option provides support while allowing weight-bearing?",
    answers: [
      { text: "Functional bracing", correct: true },
      { text: "Casting", correct: false },
      { text: "External fixation", correct: false },
      { text: "Traction", correct: false },
      { text: "Splinting", correct: false },
    ],
  },
  {
    question: "A patient with a stable, non-displaced midshaft femur fracture is managed non-surgically. What technique involves the use of an adjustable device that wraps around the limb to provide stability and support?",
    answers: [
      { text: "External fixation", correct: true },
      { text: "Casting", correct: false },
      { text: "Splinting", correct: false },
      { text: "Traction", correct: false },
      { text: "Functional bracing", correct: false },
    ],
  },
  {
    question: "What is the term for the surgical method that involves the use of screws, plates, or rods applied directly to the fractured bone to maintain alignment?",
    answers: [
      { text: "Open reduction and internal fixation (ORIF) ", correct: true },
      { text: "Casting", correct: false },
      { text: "External fixation ", correct: false },
      { text: "Intramedullary nailing", correct: false },
      { text: "Traction", correct: false },
    ],
  },
  {
    question: "A patient with a severely displaced fracture of the forearm undergoes surgery where the fractured bones are realigned without direct visualization of the fracture sit  What is the name of this surgical method?",
    answers: [
      { text: "Closed reduction", correct: true },
      { text: "Casting", correct: false },
      { text: "External fixation", correct: false },
      { text: "Intramedullary nailing", correct: false },
      { text: "Open reduction and internal fixation (ORIF)", correct: false },
    ],
  },
  {
    question: "A patient with a complex pelvic fracture undergoes a surgical procedure where external devices are applied to stabilize the fractured bones. What is the name of this surgical technique?",
    answers: [
      { text: "External fixation ", correct: true },
      { text: "Casting", correct: false },
      { text: "Open reduction and internal fixation (ORIF)", correct: false },
      { text: "External fixation ", correct: false },
      { text: "Closed reduction", correct: false },
    ],
  },
  {
    question: "A 35-year-old male presents with a history of a recent tibia fractur  He complains of numbness and tingling below the fracture sit  On examination, there is decreased sensation and weakness in the dorsiflexion of the foot. What is the most likely complication?",
    answers: [
      { text: "Neurovascular injury", correct: true },
      { text: "Infection", correct: false },
      { text: "Compartment", correct: false },
      { text: "Malunion", correct: false },
      { text: "Delayed union", correct: false },
    ],
  },
  {
    question: "A 40-year-old man sustains an open fracture of the ulna and radius in a work-related accident. Despite prompt surgical intervention and antibiotic therapy, he develops persistent drainage and local inflammation at the fracture sit  What is the likely complication in this case?",
    answers: [
      { text: "Osteomyelitis", correct: true },
      { text: "Nonunion", correct: false },
      { text: "Reflex sympathetic dystrophy", correct: false },
      { text: "Complex regional pain syndrome", correct: false },
      { text: "Avascular necrosis", correct: false },
    ],
  },
  {
    question: "The rotator cuff is a group of muscles and tendons located in which joint of the upper limb?",
    answers: [
      { text: "shoulder", correct: true },
      { text: "elbow", correct: false },
      { text: "wrist", correct: false },
      { text: "knee", correct: false },
      { text: "hip", correct: false },
    ],
  },
  {
    question: "An elderly patient presents with a sudden loss of the ability to flex their elbow. There is tenderness in the antecubital fossa. What is the most likely diagnosis?",
    answers: [
      { text: "Distal biceps tendon rupture", correct: true },
      { text: "Golfer's elbow", correct: false },
      { text: "Tennis elbow", correct: false },
      { text: "Radial head fracture", correct: false },
      { text: "Olecranon bursitis", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient with a undisplaced midshaft humerus fracture is treated conservatively. What is the primary treatment modality?",
    answers: [
      { text: "Sling and early motion", correct: true },
      { text: "Sling and early motion", correct: false },
      { text: "Amputation", correct: false },
      { text: "Traction and casting", correct: false },
      { text: "Open reduction and external fixation", correct: false },
    ],
  },
  {
    question: "A patient reports persistent pain and limited shoulder mobility following a fall on an outstretched hand. An X-ray shows a fractured surgical neck of the humerus. What is the diagnosis?",
    answers: [
      { text: "Proximal humerus fracture", correct: true },
      { text: "Clavicle fracture", correct: false },
      { text: "Glenohumeral dislocation", correct: false },
      { text: "Scapular fracture", correct: false },
      { text: "Rotator cuff tear", correct: false },
    ],
  },
  {
    question: "A 45-year-old man presents with a humerus shaft fracture after a motorcycle accident. The fracture is stable, and there is no evidence of neurovascular compromis  What is the most appropriate initial management for this patient?",
    answers: [
      { text: "Closed reduction and casting", correct: true },
      { text: "Open reduction and internal fixation", correct: false },
      { text: "External fixation", correct: false },
      { text: "Conservative management with sling ", correct: false },
      { text: "Immediate amputation", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman with a humeral shaft fracture undergoes surgical fixation. Postoperatively, she complains of numbness and tingling in the lateral aspect of her forearm and thumb. What nerve is most likely affected, and what is the appropriate management?",
    answers: [
      { text: "Radial nerve; exploration and repair", correct: true },
      { text: "Median nerve; observation", correct: false },
      { text: "Musculocutaneous nerve; early mobilization", correct: false },
      { text: "Ulnar nerve; conservative management", correct: false },
      { text: "Axillary nerve; immobilization", correct: false },
    ],
  },
  {
    question: "A 35-year-old male presents with a closed humeral shaft fractur  The fracture is displaced, and the patient is otherwise healthy. What is the optimal time frame for surgical intervention to achieve the best outcomes in terms of fracture healing and functional recovery?",
    answers: [
      { text: "Within 24 hours of injury", correct: true },
      { text: "Within 72 hours of injury", correct: false },
      { text: "Within 7 days of injury", correct: false },
      { text: "Within 14 days of injury", correct: false },
      { text: "Timing is not critical; surgery can be delayed as long as necessary", correct: false },
    ],
  },
  {
    question: "A patient complains of pain in the lateral aspect of the elbow, exacerbated by gripping and lifting. They have tenderness over the lateral epicondyl  What condition is this most likely indicative of?",
    answers: [
      { text: "Tennis elbow", correct: true },
      { text: "Cubital tunnel syndrome", correct: false },
      { text: "De Quervain's tenosynovitis", correct: false },
      { text: "Golfer's elbow", correct: false },
      { text: "Carpal tunnel syndrome", correct: false },
    ],
  },
  {
    question: "A 40-year-old female sustains an olecranon fracture after a fall. The fracture is non-displaced, and there is no evidence of elbow instability. What is the initial management strategy for this patient?",
    answers: [
      { text: "Conservative management with a sling", correct: true },
      { text: "Closed reduction and casting", correct: false },
      { text: "Immediate surgical fixation with tension band wiring", correct: false },
      { text: "Physical therapy for range of motion", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "A 32-year-old male falls onto an outstretched hand and sustains a radial head fractur  There is no evidence of elbow instability, and the patient has a functional range of motion. What is the appropriate management for this patient?",
    answers: [
      { text: "Early mobilization and physical therapy", correct: true },
      { text: "Immediate surgical fixation with a radial head prosthesis", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Immobilization in a splint for 6 weeks", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "A 25-year-old athlete sustains an injury to the forearm during a sports event. Imaging reveals a fracture in the midshaft of the ulna with an associated dislocation of the radial head. What is the most appropriate term for this type of forearm injury?",
    answers: [
      { text: "Monteggia fracture", correct: true },
      { text: "Galeazzi fracture", correct: false },
      { text: "Colles fracture", correct: false },
      { text: "Smith fracture", correct: false },
      { text: "Barton fracture", correct: false },
    ],
  },
  {
    question: "A 38-year-old patient with a history of a forearm fracture presents with persistent pain, swelling, and restricted motion several weeks after the fracture has healed. Imaging reveals abnormal bone formation and joint stiffness. What is the most likely complication of this forearm fracture?",
    answers: [
      { text: "Heterotopic ossification", correct: true },
      { text: "Nonunion", correct: false },
      { text: "Avascular necrosis", correct: false },
      { text: "Malunion", correct: false },
      { text: "Reflex sympathetic dystrophy", correct: false },
    ],
  },
  {
    question: "A patient with a distal radius fracture is treated with closed reduction and casting. What is an important consideration during follow-up care?",
    answers: [
      { text: "Monitoring for carpal tunnel syndrome", correct: true },
      { text: "Immediate return to full activity", correct: false },
      { text: "Early removal of the cast", correct: false },
      { text: "Avoiding all wrist movements", correct: false },
      { text: "Administration of oral antibiotics", correct: false },
    ],
  },
  {
    question: "A 60-year-old patient falls onto an outstretched hand, resulting in a characteristic deformity with a \"dinner fork\" appearance on examination. Which part of the radius is typically affected in a Colles fracture?",
    answers: [
      { text: "Distal third", correct: true },
      { text: "Proximal third", correct: false },
      { text: "Midshaft", correct: false },
      { text: "Radial head", correct: false },
      { text: "Neck", correct: false },
    ],
  },
  {
    question: "A 50-year-old patient sustains a Smith fracture with significant anterior displacement of the distal fragment. What is the recommended treatment approach for this fracture pattern?",
    answers: [
      { text: "Open reduction and internal fixation", correct: true },
      { text: "Closed reduction and casting", correct: false },
      { text: "Immediate surgical fixation with plates and screws", correct: false },
      { text: "Observation with regular follow-up", correct: false },
      { text: "Immobilization in a splint", correct: false },
    ],
  },
  {
    question: "A patient presents with localized tenderness and swelling in the anatomic snuffbox region of the wrist. They report a history of a fall on an outstretched hand. What is the most likely diagnosis?",
    answers: [
      { text: "Scaphoid fracture", correct: true },
      { text: "De Quervain's tenosynovitis", correct: false },
      { text: "Carpal tunnel syndrome", correct: false },
      { text: "Cubital tunnel syndrome", correct: false },
      { text: "Tennis elbow", correct: false },
    ],
  },
  {
    question: "A 30-year-old office worker presents with persistent wrist pain and difficulty gripping objects after a fall onto an outstretched hand. Imaging reveals a fracture of the scaphoid. What is the recommended initial treatment for a non-displaced scaphoid fracture?",
    answers: [
      { text: "Immobilization in a splint", correct: true },
      { text: "Immediate surgical fixation with screws", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Physical therapy without immobilization", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "A 45-year-old patient presents with a fracture of the hamate bone following a sports-related injury. What is a potential complication associated with fractures of the hamate, and what is the recommended treatment to address this complication?",
    answers: [
      { text: "Nerve compression; immobilization in a splint ", correct: true },
      { text: "Tendon rupture; immediate surgical repair", correct: false },
      { text: "Ulnar artery injury; closed reduction and casting", correct: false },
      { text: "Tendonitis; physical therapy and activity modification", correct: false },
      { text: "Delayed union; open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "A 50-year-old patient presents with sharp, shooting pain and tingling in the thumb, index, and middle fingers. They report weakness in thumb abduction. What is the most likely diagnosis?",
    answers: [
      { text: "Carpal tunnel syndrome", correct: true },
      { text: "Tennis elbow", correct: false },
      { text: "Rotator cuff tear", correct: false },
      { text: "Cubital tunnel syndrome", correct: false },
      { text: "De Quervain's tenosynovitis", correct: false },
    ],
  },
  {
    question: "A 45-year-old individual sustains a high-energy injury to the hand, resulting in damage to the ulnar nerv  What functional deficit is commonly associated with ulnar nerve injury in the hand, and what is a common surgical intervention to address this deficit?",
    answers: [
      { text: "Loss of sensation in the little finger and ulnar side of the ring finger; ulnar nerve transposition ", correct: true },
      { text: "Loss of thumb opposition; carpal tunnel release surgery", correct: false },
      { text: "Weakness in wrist extension; tendon repair surgery", correct: false },
      { text: "Loss of sensation in the index and middle fingers; median nerve release surgery", correct: false },
      { text: "Inability to flex the wrist and fingers; flexor tendon reconstruction", correct: false },
    ],
  },
  {
    question: "A 60-year-old patient with a history of osteoporosis experiences a sudden, severe groin pain following a fall. Imaging reveals a fracture in the neck of the femur. What is the likely diagnosis?",
    answers: [
      { text: "Femoral neck fracture", correct: true },
      { text: "Hip dislocation ", correct: false },
      { text: "Femoral shaft fracture", correct: false },
      { text: "Hip labral tear", correct: false },
      { text: "Patellar fracture", correct: false },
    ],
  },
  {
    question: "A 60-year-old patient sustains a trochanteric fracture after a fall. The fracture is stable and well-aligned. What is the primary surgical treatment option for stable trochanteric fractures?",
    answers: [
      { text: "Dynamic hip screw fixation", correct: true },
      { text: "Closed reduction and casting", correct: false },
      { text: "Total hip arthroplasty", correct: false },
      { text: "Intramedullary nailing", correct: false },
      { text: "Hip arthroscopy", correct: false },
    ],
  },
  {
    question: "An 80-year-old patient falls at home and presents with pain and inability to bear weight on the affected leg. Imaging reveals a femoral neck fractur  What is the primary concern associated with femoral neck fractures, especially in the elderly?",
    answers: [
      { text: "Avascular necrosis", correct: true },
      { text: "Delayed union", correct: false },
      { text: "Osteomyelitis", correct: false },
      { text: "Malunion", correct: false },
      { text: "Nonunion", correct: false },
    ],
  },
  {
    question: "A patient presents with groin pain, limited hip movement, and positive impingement tests. An MRI reveals a torn labrum in the hip joint. What is the likely diagnosis?",
    answers: [
      { text: "Hip labral tear", correct: true },
      { text: "Hip dislocation", correct: false },
      { text: "Pelvic fracture", correct: false },
      { text: "Osteoarthritis of the hip", correct: false },
      { text: "Hip impingement syndrome", correct: false },
    ],
  },
  {
    question: "A 10-year-old child falls from a height and sustains a supracondylar fracture of the femur. What anatomical landmark is commonly involved in supracondylar fractures, and why is this type of fracture more prevalent in pediatric populations?",
    answers: [
      { text: "Involvement of the distal femoral epiphysis; open growth plates", correct: true },
      { text: "Involvement of the greater trochanter; increased bone density", correct: false },
      { text: "Involvement of the femoral diaphysis; increased bone strength", correct: false },
      { text: "Involvement of the femoral neck; higher flexibility", correct: false },
      { text: "Involvement of the femoral condyles; incomplete ossification", correct: false },
    ],
  },
  {
    question: "A basketball player has patellar tendinitis. What is the recommended initial treatment approach?",
    answers: [
      { text: "Stretching and strengthening exercises ", correct: true },
      { text: "Surgery", correct: false },
      { text: "Casting", correct: false },
      { text: "Immediate return to sports", correct: false },
      { text: "Rest and ice", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient sustains a midshaft femoral fracture due to a fall from a ladder. The fracture is displaced, and the patient is otherwise healthy. What is the preferred surgical treatment for this patient's femoral shaft fracture?",
    answers: [
      { text: "Intramedullary nailing", correct: true },
      { text: "Closed reduction and casting", correct: false },
      { text: "Conservative management with traction", correct: false },
      { text: "Open reduction with internal fixation", correct: false },
      { text: "External fixation", correct: false },
    ],
  },
  {
    question: "A 32-year-old athlete experiences a sudden twist of the knee during a soccer game, resulting in immediate pain and swelling. Clinical examination indicates instability during the Lachman test. Which knee ligament is most likely injured in this scenario?",
    answers: [
      { text: "Anterior cruciate ligament (ACL) ", correct: true },
      { text: "Posterior cruciate ligament (PCL) ", correct: false },
      { text: "Medial collateral ligament (MCL) ", correct: false },
      { text: "Lateral collateral ligament (LCL) ", correct: false },
      { text: "Patellar ligament", correct: false },
    ],
  },
  {
    question: "A patient presents with pain and swelling in the knee joint after a football gam  On examination, the knee is unstable, and there is a \"drawer sign.\" What is the likely diagnosis?",
    answers: [
      { text: "Anterior cruciate ligament (ACL) tear", correct: true },
      { text: "Patellar dislocation", correct: false },
      { text: "Tibial plateau fracture", correct: false },
      { text: "Shin splints ", correct: false },
      { text: "Meniscus tear", correct: false },
    ],
  },
  {
    question: "A young athlete sustains an anterior cruciate ligament (ACL) tear. What is the typical treatment for this injury?",
    answers: [
      { text: "ACL reconstruction surgery", correct: true },
      { text: "Rest and ice ", correct: false },
      { text: "Physical therapy", correct: false },
      { text: "Brace and crutches", correct: false },
      { text: "Open reduction and internal fixation", correct: false },
    ],
  },
  {
    question: "A young athlete reports localized pain and tenderness at the insertion point of the patellar tendon. What condition is most likely responsible for these symptoms?",
    answers: [
      { text: "Patellar tendinitis", correct: true },
      { text: "Quadriceps tendon rupture", correct: false },
      { text: "Popliteal artery aneurysm", correct: false },
      { text: "Meniscus tear", correct: false },
      { text: "Anterior cruciate ligament (ACL) tear", correct: false },
    ],
  },
  {
    question: "22-years-old man presented with  2 days history  of pain, inability to continue activity  ,swelling, range of motion loss after injury from sport activity. Diangnosis was made with arthroscopy and confirm as ant cruciate ligament  injury. Which  of the following physical examination  test will be positive  in this patient? ",
    answers: [
      { text: "lachmann", correct: true },
      { text: "valgus stress test", correct: false },
      { text: "varus stress test", correct: false },
      { text: "apley grinding  test", correct: false },
      { text: "post. Drawer test", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient presents with a patellar fracture following a fall. The fracture is displaced, and there is a concern about malalignment. What is the most appropriate initial treatment strategy for this patient's patellar fracture?",
    answers: [
      { text: "Open reduction and internal fixation (ORIF)", correct: true },
      { text: "Conservative management with knee immobilization", correct: false },
      { text: "Immediate weight-bearing exercises", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Patellar tendon repair", correct: false },
    ],
  },
  {
    question: "A patient complains of calf pain and swelling following a long flight. There is tenderness and warmth in the calf. What condition is most likely responsible?",
    answers: [
      { text: "Deep vein thrombosis (DVT) ", correct: true },
      { text: "Achilles tendonitis", correct: false },
      { text: "Popliteal artery aneurysm", correct: false },
      { text: "Calf muscle strain", correct: false },
      { text: "Peroneal tendonitis", correct: false },
    ],
  },
  {
    question: "A patient has a lateral ankle sprain with significant swelling. What is the recommended initial treatment?",
    answers: [
      { text: "Rest, ice, compression, and elevation (RICE) ", correct: true },
      { text: "Early weight-bearing", correct: false },
      { text: "Surgery", correct: false },
      { text: "Ankle taping", correct: false },
      { text: "Crutches for life ", correct: false },
    ],
  },
  {
    question: "A long-distance runner complains of shin pain during and after running. What is a common initial treatment approach for shin splints?",
    answers: [
      { text: "Rest and ice", correct: true },
      { text: "Immediate return to running", correct: false },
      { text: "Surgery", correct: false },
      { text: "Wearing high-heeled shoes", correct: false },
      { text: "Corticosteroid injection", correct: false },
    ],
  },
  {
    question: "Which ligament is commonly injured in a lateral ankle sprain?",
    answers: [
      { text: "Anterior talofibular ligament (ATFL) ", correct: true },
      { text: "Calcaneofibular ligament (CFL) ", correct: false },
      { text: "Posterior talofibular ligament (PTFL)", correct: false },
      { text: "Deltoid ligament", correct: false },
      { text: "Plantar fascia", correct: false },
    ],
  },
  {
    question: "A 45-year-old individual complains of heel pain, particularly in the morning. Clinical examination suggests plantar fasciitis. What is a common non-surgical treatment approach for plantar fasciitis?",
    answers: [
      { text: "Arch supports and orthotics", correct: true },
      { text: "Immediate surgical release", correct: false },
      { text: "Casting and immobilization", correct: false },
      { text: "Active stretching without rest", correct: false },
      { text: "Corticosteroid injections", correct: false },
    ],
  },
  {
    question: "A 25-year-old individual presents with an acute ankle sprain following a misstep. The injury is classified as Grade II based on clinical assessment. What is the recommended initial treatment strategy for a Grade II ankle sprain?",
    answers: [
      { text: "Immobilization with a brace or splint", correct: true },
      { text: "Immediate surgical intervention", correct: false },
      { text: "Rigid casting for several weeks", correct: false },
      { text: "Early weight-bearing exercises", correct: false },
      { text: "Immediate return to sports activities", correct: false },
    ],
  },
  {
    question: "A 40-year-old runner complains of persistent pain and swelling in the back of the ankl  Physical examination reveals tenderness and thickening of the Achilles tendon. What is a common conservative treatment approach for Achilles tendonitis?",
    answers: [
      { text: "Rest, ice, compression, and elevation (RICE) ", correct: true },
      { text: "Immediate surgical repair", correct: false },
      { text: "Corticosteroid injections", correct: false },
      { text: "Early weight-bearing exercises", correct: false },
      { text: "Active stretching without rest", correct: false },
    ],
  },
  {
    question: "What is the most common cause of pelvic fractures?",
    answers: [
      { text: "Motor vehicle accidents", correct: true },
      { text: "Sports injuries", correct: false },
      { text: "Osteoporotic pathological fractures", correct: false },
      { text: "Falls from heights", correct: false },
      { text: "Gunshot wounds", correct: false },
    ],
  },
  {
    question: "A patient with an unstable pelvic fracture is hemodynamically unstable and requires emergent stabilization. What is the recommended immediate intervention in this critical situation?",
    answers: [
      { text: "Pelvic binder application", correct: true },
      { text: "Non-surgical management with bed rest", correct: false },
      { text: "Immediate closed reduction and casting", correct: false },
      { text: "Early weight-bearing exercises", correct: false },
      { text: "Sacroiliac joint fusion", correct: false },
    ],
  },
  {
    question: "A patient with an unstable pelvic fracture and associated hemorrhage requires definitive stabilization. What is the primary surgical technique used to achieve stability and control bleeding in severe pelvic fractures?",
    answers: [
      { text: "Pelvic angiography and embolization", correct: true },
      { text: "External fixation", correct: false },
      { text: "Closed reduction and casting", correct: false },
      { text: "Sacroiliac joint fusion", correct: false },
      { text: "Non-surgical management with bed rest", correct: false },
    ],
  },
  {
    question: "What is the most common cause of cervical spine injuries?",
    answers: [
      { text: "Motor vehicle accidents", correct: true },
      { text: "Falls from heights", correct: false },
      { text: "Athletic injuries", correct: false },
      { text: "Degenerative disc disease", correct: false },
      { text: "Osteoporosis", correct: false },
    ],
  },
  {
    question: "A patient is diagnosed with ankylosing spondylitis and experiences a fracture-dislocation in the cervical spine after a minor trauma. What is the specific type of fracture often seen in patients with ankylosing spondylitis?",
    answers: [
      { text: "Flexion-distraction injury", correct: true },
      { text: "Hangman's fracture", correct: false },
      { text: "Bamboo spine fracture", correct: false },
      { text: "Chance fracture", correct: false },
      { text: "Odontoid fracture", correct: false },
    ],
  },
  {
    question: "A patient presents with a burst fracture in the thoracic spine after a high-impact injury. What is the characteristic radiographic appearance of a burst fracture?",
    answers: [
      { text: "Fragmentation of vertebral body", correct: true },
      { text: "Anterior wedging", correct: false },
      { text: "Horizontal split", correct: false },
      { text: "Posterior displacement", correct: false },
      { text: "Spondylolisthesis", correct: false },
    ],
  },
  {
    question: "A patient with a stable vertebral compression fracture in the lumbar spine experiences persistent pain despite conservative management. What is a common minimally invasive procedure used for pain relief in vertebral compression fractures?",
    answers: [
      { text: "Vertebroplasty", correct: true },
      { text: "Laminectomy", correct: false },
      { text: "Spinal fusion", correct: false },
      { text: "Foraminotomy", correct: false },
      { text: "Discectomy", correct: false },
    ],
  },
  {
    question: "A patient presents with a traumatic spinal cord injury resulting in complete paralysis below the level of the injury. What is the term used to describe this severe neurological deficit?",
    answers: [
      { text: "Paraplegia", correct: true },
      { text: "Paraparesis", correct: false },
      { text: "Hemiparesis", correct: false },
      { text: "Quadriparesis", correct: false },
      { text: "Hemiplegia", correct: false },
    ],
  },
  {
    question: "Which of the following is a common symptom of a rib fracture?",
    answers: [
      { text: "Crepitus", correct: true },
      { text: "Hemoptysis", correct: false },
      { text: "Dyspnea", correct: false },
      { text: "Hematuria", correct: false },
      { text: "Hematemesis", correct: false },
    ],
  },
  {
    question: "A patient is diagnosed with a tension pneumothorax. What is the most critical complication associated with tension pneumothorax?",
    answers: [
      { text: "Cardiac tamponade", correct: true },
      { text: "Respiratory acidosis", correct: false },
      { text: "Respiratory alkalosis", correct: false },
      { text: "Pleural effusion", correct: false },
      { text: "Atelectasis", correct: false },
    ],
  },
  {
    question: "A patient sustains a penetrating injury to the chest, resulting in blood accumulation in the pleural spac  What is the term used to describe this condition?",
    answers: [
      { text: "Hemothorax", correct: true },
      { text: "Tension pneumothorax", correct: false },
      { text: "Pleuritis", correct: false },
      { text: "Empyema", correct: false },
      { text: "Atelectasis", correct: false },
    ],
  },
  {
    question: "A patient presents with a fractured sternum following a direct blow to the chest. What is a potential complication associated with sternal fractures?",
    answers: [
      { text: "Cardiac arrhythmias", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "Deep vein thrombosis", correct: false },
      { text: "Pancreatitis", correct: false },
      { text: "Hepatitis", correct: false },
    ],
  },
  {
    question: "A patient is diagnosed with flail chest and respiratory distress. What is a potential surgical intervention to stabilize the flail segment in a patient with persistent respiratory compromise?",
    answers: [
      { text: "Thoracotomy and fixation with plates and screws", correct: true },
      { text: "Video-assisted thoracoscopic surgery (VATS)", correct: false },
      { text: "Lobectomy", correct: false },
      { text: "Lung transplant", correct: false },
      { text: "Pleurodesis", correct: false },
    ],
  },
  {
    question: "Which joint is commonly affected by osteoarthritis?",
    answers: [
      { text: "Knee", correct: true },
      { text: "Elbow", correct: false },
      { text: "Shoulder", correct: false },
      { text: "Hip", correct: false },
      { text: "Ankle", correct: false },
    ],
  },
  {
    question: "A 55-year-old individual presents with joint pain and stiffness, particularly in the morning, which improves with activity. On examination, there are bony enlargements and crepitus in the affected joints. What is the most likely diagnosis?",
    answers: [
      { text: "Osteoarthritis", correct: true },
      { text: "Rheumatoid arthritis", correct: false },
      { text: "Gout", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
      { text: "Psoriatic arthritis", correct: false },
    ],
  },
  {
    question: "A patient with hand osteoarthritis experiences localized pain and stiffness. What is a pharmacological option commonly used for pain relief in hand osteoarthritis?",
    answers: [
      { text: "Intra-articular corticosteroid injections", correct: true },
      { text: "Nonsteroidal anti-inflammatory drugs (NSAIDs) ", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "Tumor necrosis factor (TNF) inhibitors", correct: false },
      { text: "Disease-modifying antirheumatic drugs (DMARDs)", correct: false },
    ],
  },
  {
    question: "A patient with knee osteoarthritis is seeking pain relief, and conservative measures have provided minimal benefit. What is a pharmacological option commonly used for pain management in knee osteoarthritis?",
    answers: [
      { text: "Opioid analgesics", correct: true },
      { text: "Disease-modifying antirheumatic drugs (DMARDs)", correct: false },
      { text: "Acetaminophen", correct: false },
      { text: "Biologic therapies", correct: false },
      { text: "Colchicine", correct: false },
    ],
  },
  {
    question: "A patient with osteoarthritis experiences morning stiffness lasting less than 30 minutes and joint pain that worsens with weight-bearing activities. What is a characteristic feature differentiating osteoarthritis from other arthritic conditions?",
    answers: [
      { text: "Inflammatory joint pain", correct: true },
      { text: "Morning stiffness lasting more than 60 minutes", correct: false },
      { text: "Symmetric joint involvement", correct: false },
      { text: "Elevation of acute-phase reactants", correct: false },
      { text: "Rash on the skin", correct: false },
    ],
  },
  {
    question: "A patient with osteoarthritis experiences pain and inflammation in multiple joints. What is a disease-modifying therapy commonly used in the management of osteoarthritis?",
    answers: [
      { text: "Glucosamine and chondroitin supplements", correct: true },
      { text: "Methotrexate", correct: false },
      { text: "Tumor necrosis factor (TNF) inhibitors ", correct: false },
      { text: "Nonsteroidal anti-inflammatory drugs (NSAIDs)", correct: false },
      { text: "Acetaminophen", correct: false },
    ],
  },
  {
    question: "A patient with knee osteoarthritis is considering intra-articular injections for pain relief. What is a common substance used in intra-articular injections for knee osteoarthritis?",
    answers: [
      { text: "Corticosteroids", correct: true },
      { text: "Methotrexate", correct: false },
      { text: "Biologic therapies", correct: false },
      { text: "Colchicine", correct: false },
      { text: "Acetaminophen", correct: false },
    ],
  },
  {
    question: "Which gender is more commonly affected by congenital dislocation of the hip joint?",
    answers: [
      { text: "Females", correct: true },
      { text: "Males", correct: false },
      { text: "Depends on birth weight", correct: false },
      { text: "Equally in both genders ", correct: false },
      { text: "Depends on maternal age", correct: false },
    ],
  },
  {
    question: "A 3-year-old child is diagnosed with hip dysplasia, and conservative measures have failed. What is a surgical procedure commonly considered for the treatment of persistent hip dysplasia in this age group?",
    answers: [
      { text: "Triple osteotomy", correct: true },
      { text: "Closed reduction", correct: false },
      { text: "Total hip replacement (THR) ", correct: false },
      { text: "Arthroscopic surgery", correct: false },
      { text: "Synovectomy", correct: false },
    ],
  },
  {
    question: "A teenager with untreated developmental dysplasia of the hip (DDH) presents with hip pain and functional impairment. What is a common surgical intervention for older patients with established hip dysplasia?",
    answers: [
      { text: "Total hip replacement (THR)", correct: true },
      { text: "Triple osteotomy", correct: false },
      { text: "Closed reduction", correct: false },
      { text: "Pavlik harness application", correct: false },
      { text: "Arthroscopic surgery", correct: false },
    ],
  },
  {
    question: "What is the most common term used to describe the congenital deformity in which the foot is turned inward and downward?",
    answers: [
      { text: "Brachydactyly", correct: true },
      { text: "Polydactyly", correct: false },
      { text: "Syndactyly", correct: false },
      { text: "Clubfoot", correct: false },
      { text: "Arachnodactyly", correct: false },
    ],
  },
  {
    question: "A newborn is diagnosed with bilateral congenital clubfoot. What is a non-surgical method commonly used for the initial management of congenital clubfoot deformity?",
    answers: [
      { text: "Tendon transfer", correct: true },
      { text: "Ilizarov technique", correct: false },
      { text: "Triple arthrodesis", correct: false },
      { text: "Casting (Ponseti method) ", correct: false },
      { text: "Open reduction", correct: false },
    ],
  },
  {
    question: "A child with congenital clubfoot experiences a relapse after initial correction. What is a surgical procedure commonly considered to address recurrent clubfoot deformity?",
    answers: [
      { text: "Soft tissue release", correct: true },
      { text: "Achilles tenotomy", correct: false },
      { text: "Tendon transfer", correct: false },
      { text: "Triple arthrodesis", correct: false },
      { text: "Ilizarov technique", correct: false },
    ],
  },
  {
    question: "A child with club hand deformity experiences functional limitations and difficulty with fine motor skills. What is a surgical intervention commonly considered for the correction of club hand deformity?",
    answers: [
      { text: "Soft tissue release", correct: true },
      { text: "Amputation", correct: false },
      { text: "Tendon transfer", correct: false },
      { text: "Ilizarov technique", correct: false },
      { text: "Ponseti method", correct: false },
    ],
  },
  {
    question: "A child with club hand deformity experiences functional limitations and difficulty with fine motor skills. What is a surgical intervention commonly considered for the correction of club hand deformity?",
    answers: [
      { text: "Soft tissue release", correct: true },
      { text: "Amputation", correct: false },
      { text: "Tendon transfer", correct: false },
      { text: "Ilizarov technique", correct: false },
      { text: "Ponseti method", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is characterized by the abnormal curvature of the spine, typically presenting as an \"S\" or \"C\" shape?",
    answers: [
      { text: "Scoliosis", correct: true },
      { text: "Lordosis", correct: false },
      { text: "Kyphosis", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
      { text: "Spondylolisthesis", correct: false },
    ],
  },
  {
    question: "A teenager is diagnosed with adolescent idiopathic scoliosis. What is the characteristic feature of this type of scoliosis?",
    answers: [
      { text: "Structural lateral curvature of the spine", correct: true },
      { text: "Congenital vertebral anomalies", correct: false },
      { text: "Neuromuscular disorders", correct: false },
      { text: "Decreased spinal mobility", correct: false },
      { text: "Abnormal rotation of the spine", correct: false },
    ],
  },
  {
    question: "A teenager with adolescent idiopathic scoliosis has a curve that progresses despite conservative measures. What is a surgical technique commonly used to correct the spinal deformity in adolescents with scoliosis?",
    answers: [
      { text: "Spinal fusion with instrumentation ", correct: true },
      { text: "Kyphoplasty", correct: false },
      { text: "Diskectomy", correct: false },
      { text: "Vertebral augmentation", correct: false },
      { text: "Laminectomy", correct: false },
    ],
  },
  {
    question: "An adult patient with degenerative scoliosis experiences severe pain and disability. What is a surgical intervention commonly considered for the management of degenerative scoliosis in adults?",
    answers: [
      { text: "Spinal fusion with instrumentation ", correct: true },
      { text: "Bracing", correct: false },
      { text: "Observation", correct: false },
      { text: "Physical therapy", correct: false },
      { text: "Casting", correct: false },
    ],
  },
  {
    question: "Which common osteochondropathy is characterized by the avascular necrosis of the femoral head, particularly affecting children?",
    answers: [
      { text: "Legg-Calvé-Perthes disease", correct: true },
      { text: "Osgood-Schlatter disease", correct: false },
      { text: "Sever's disease", correct: false },
      { text: "Osteochondritis dissecans", correct: false },
      { text: "Kohler's disease", correct: false },
    ],
  },
  {
    question: "A teenager presents with pain and swelling in the diaphysis of long bones, often associated with a characteristic \"onion skin\" appearance on imaging. What is the likely diagnosis?",
    answers: [
      { text: "Ewing sarcoma", correct: true },
      { text: "Osteosarcoma", correct: false },
      { text: "Chondrosarcoma", correct: false },
      { text: "Osteoid osteoma", correct: false },
      { text: "Giant cell tumor", correct: false },
    ],
  },
  {
    question: "A middle-aged individual presents with pain and swelling in the metaphysis of long bones, especially around the knee joint. Radiographs reveal a \"sunburst\" appearanc  What is the likely diagnosis?",
    answers: [
      { text: "Osteosarcoma", correct: true },
      { text: "Chondrosarcoma", correct: false },
      { text: "Ewing sarcoma", correct: false },
      { text: "Giant cell tumor", correct: false },
      { text: "Osteoid osteoma", correct: false },
    ],
  },
  {
    question: "A patient is diagnosed with osteosarcoma. What is the primary treatment modality for osteosarcoma?",
    answers: [
      { text: "Surgical resection", correct: true },
      { text: "Chemotherapy", correct: false },
      { text: "Radiation therapy", correct: false },
      { text: "Immunotherapy", correct: false },
      { text: "Bisphosphonate therapy", correct: false },
    ],
  },
  {
    question: "A patient with giant cell tumor of the bone presents with recurrence after initial surgical resection. What is a treatment option for recurrent giant cell tumors?",
    answers: [
      { text: "Repeat surgical resection", correct: true },
      { text: "Radiation therapy", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "Bisphosphonate therapy", correct: false },
      { text: "Targeted therapy", correct: false },
    ],
  },
  {
    question: "Which acquired foot deformity is characterized by an abnormal bending or contraction of the toes, resembling a claw?",
    answers: [
      { text: "Hammer toe", correct: true },
      { text: "Hallux valgus", correct: false },
      { text: "Hallux rigidus", correct: false },
      { text: "Plantar fasciitis", correct: false },
      { text: "Morton's neuroma", correct: false },
    ],
  },
  {
    question: "A patient with hallux rigidus experiences significant pain and limited range of motion in the big to  What is a surgical intervention commonly considered for the management of hallux rigidus?",
    answers: [
      { text: "Arthrodesis", correct: true },
      { text: "Soft tissue release", correct: false },
      { text: "Injection therapy", correct: false },
      { text: "Joint fusion", correct: false },
      { text: "Tendon transfer", correct: false },
    ],
  },
  {
    question: "A patient with Morton's neuroma has persistent pain and discomfort in the ball of the foot. What is a non-surgical treatment option for Morton's neuroma?",
    answers: [
      { text: "Injection therapy", correct: true },
      { text: "Soft tissue release", correct: false },
      { text: "Arthrodesis", correct: false },
      { text: "Amputation", correct: false },
      { text: "Tendon transfer", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
