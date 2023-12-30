import { db } from "../firebase";
import {
  doc,
  getDoc,
  query,
  orderBy,
  collection,
  getDocs,
  startAfter,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
  where,
} from "firebase/firestore";

type EnquiringForType =
  | "Startup Consulting"
  | "Enterprise Growth"
  | "Platform or App Development"
  | "Other";

export type SEO = {
  description: string;
  metaTag: string;
  title: string;
};

interface FormData {
  name: string;
  companyName: string;
  designation: string;
  phoneNumber: string;
  email: string;
  enquiringFor: EnquiringForType;
  annualMarketingBudget: string;
  remarks: string;
}

export interface CaseStudy {
  uploadTime: Date;
  id: string;
  content: { value: string; type: string }[];
}

export interface Blog extends CaseStudy {
  author: {
    fileId: string;
    name: string;
    bio: string;
    profilePicture: string;
  };
}

interface GetCaseStudiesResult {
  data: CaseStudy[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}

interface GetBlogResult {
  data: Blog[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}

export interface OtherContent {
  fileUrl: string;
  id: string;
  title: string;
  type: string;
}

interface GetOtherContentResult {
  data: OtherContent[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}

export const getEbookByCategory = async (
  lastDoc: QueryDocumentSnapshot<DocumentData> | null,
  pageSize: number
): Promise<GetOtherContentResult | null> => {
  try {
    const otherContentCollection = collection(db, "OtherContent");
    let docQuery = query(
      otherContentCollection,
      orderBy("title"),
      where("type", "==", "E-Books"),
      startAfter(lastDoc),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(docQuery);
    const otherContentData: OtherContent[] = [];
    querySnapshot.forEach((doc) => {
      otherContentData.push({ ...(doc.data() as OtherContent) });
    });
    return {
      data: otherContentData,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1], // Store the last document for the next page
    };
  } catch (error: any) {
    console.error("Error fetching business from Firestore: ", error.message);
    return null;
  }
};

export const getWhitePaperByCategory = async (
  lastDoc: QueryDocumentSnapshot<DocumentData> | null,
  pageSize: number
): Promise<GetOtherContentResult | null> => {
  try {
    const otherContentCollection = collection(db, "OtherContent");
    let docQuery = query(
      otherContentCollection,
      orderBy("title"),
      where("type", "==", "White Papers"),
      startAfter(lastDoc),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(docQuery);
    const otherContentData: OtherContent[] = [];
    querySnapshot.forEach((doc) => {
      otherContentData.push({ ...(doc.data() as OtherContent) });
    });
    return {
      data: otherContentData,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1], // Store the last document for the next page
    };
  } catch (error: any) {
    console.error("Error fetching business from Firestore: ", error.message);
    return null;
  }
};

export async function getBlogById(id: string) {
  try {
    const blogDocRef = doc(collection(db, "blog"), id);
    const blogDocSnapshot = await getDoc(blogDocRef);

    if (blogDocSnapshot.exists()) {
      const blogData = blogDocSnapshot.data();
      return blogData;
    } else {
      console.log("No such document!");
      return "no-doc";
    }
  } catch (error) {
    console.error("Error getting blog document:", error);
    return null;
  }
}

export const getBlogs = async (
  lastDoc: QueryDocumentSnapshot<DocumentData> | null,
  pageSize: number
): Promise<GetBlogResult | null> => {
  try {
    const blogCollection = collection(db, "blog");
    let docQuery = query(
      blogCollection,
      orderBy("id"),
      startAfter(lastDoc),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(docQuery);
    const blogData: Blog[] = [];
    querySnapshot.forEach((doc) => {
      blogData.push({ ...(doc.data() as Blog) });
    });
    return {
      data: blogData,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1], // Store the last document for the next page
    };
  } catch (error: any) {
    console.error("Error fetching business from Firestore: ", error.message);
    return null;
  }
};

export const getCaseStudies = async (
  lastDoc: QueryDocumentSnapshot<DocumentData> | null,
  pageSize: number
): Promise<GetCaseStudiesResult | null> => {
  try {
    const caseStudyCollection = collection(db, "CaseStudies");
    let docQuery = query(
      caseStudyCollection,
      orderBy("id"),
      startAfter(lastDoc),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(docQuery);
    const caseStudyData: CaseStudy[] = [];

    querySnapshot.forEach((doc) => {
      caseStudyData.push({ ...(doc.data() as CaseStudy) });
    });

    return {
      data: caseStudyData,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
    };
  } catch (error: any) {
    console.error("Error fetching business from Firestore: ", error.message);
    return null;
  }
};

export async function getCSById(id: string) {
  try {
    const blogDocRef = doc(collection(db, "CaseStudies"), id);
    const blogDocSnapshot = await getDoc(blogDocRef);

    if (blogDocSnapshot.exists()) {
      const blogData = blogDocSnapshot.data();
      return blogData;
    } else {
      console.log("No such document!");
      return "no-doc";
    }
  } catch (error) {
    console.error("Error getting blog document:", error);
    return null;
  }
}

export async function getCaseStudiesById(id: string) {
  try {
    const caseStudyDocRef = doc(collection(db, "CaseStudies"), id);
    const caseStudyDocSnapshot = await getDoc(caseStudyDocRef);

    if (caseStudyDocSnapshot.exists()) {
      const caseStudyData = caseStudyDocSnapshot.data();
      return caseStudyData;
    } else {
      console.log("No such document!");
      return "no-doc";
    }
  } catch (error) {
    console.error("Error getting caseStudy document:", error);
    return null;
  }
}
export async function getPopup() {
  try {
    const popupDocRef = doc(collection(db, "popup"), "gSYBMPVIpksFTEv2kTti");
    const popupDocSnapshot = await getDoc(popupDocRef);
    const popupData = popupDocSnapshot.data();
    return popupData;
  } catch (error) {
    console.error("Error getting popup document:", error);
    return null;
  }
}

export async function getSEOById({ id }: { id: string }) {
  try {
    const seoDocRef = doc(collection(db, "SEOFORPPV"), id);
    const seoDocSnapshot = await getDoc(seoDocRef);

    if (seoDocSnapshot.exists()) {
      const seoData = seoDocSnapshot.data();
      return seoData;
    } else {
      return "no-doc";
    }
  } catch (error) {
    console.error("Error getting SEO document:", error);
    return null;
  }
}
