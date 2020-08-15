export type Image = {
    filename: string;
    label?: string;
    folder: string;
    extension: string;
    original_filename?: string;
    original_path?: string;
    fully_qualified_url?: string;
    width?: string | null;
    height?: string | null;
    alt?: string | null;
    url?: string | null;
};

export default Image;